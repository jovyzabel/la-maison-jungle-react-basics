import CareScale from "./CareScale"
import '../styles/PlantItem.css';
function PlantItem({id, cover, name, water, light, price}) {

    return (
        <li key={id} className='lmj-plant-item' onClick={()=> alert(`Vous voulez acheter 1 ${name}? Très bon choix 🌱✨`)}>
            <span className="lmj-plant-item-price">{price}€</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}  />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>

        </li>
    )
}

export default PlantItem