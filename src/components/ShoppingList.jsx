import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import { useState } from 'react';
import Categories from './Categories';
// import Categories from './Categories'


function ShoppingList({ cart, updateCart }) {
    
    const categories = plantList.reduce(
    		(acc, plant) =>
    			acc.includes(plant.category) ? acc : acc.concat(plant.category),
    		[]
    	)

    const [currentCategory, setCategory] = useState('');

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    

	return (
		<div className='lmj-shopping-list'>
			<Categories categories={categories} setCategory={setCategory} currentCategory={currentCategory} />
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => 
                   !currentCategory || currentCategory === category ? (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)} className='lmj-categories-btn'>Ajouter</button>
					</div>
				): null
                )}
			</ul>
		</div>
	)
}

export default ShoppingList