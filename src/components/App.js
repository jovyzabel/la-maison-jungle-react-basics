import '../styles/App.css';
import '../styles/Layout.css';
import Banner from './Banner';
import Footer from './Footer';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import { useEffect, useState } from 'react';


function App() {
  
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  return (
    <div className="">
      <Banner>
				<img src="https://user.oc-static.com/upload/2021/01/15/16107240243307_image2.png" alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart}/>
        <div>
          <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
