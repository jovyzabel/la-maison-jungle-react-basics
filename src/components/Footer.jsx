import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert('Merci de rentrer un email valide')
        }
    }
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
    
                    <input type="email" name="" id="" placeholder='Entrez votre email'
                        onChange={(e)=>setInputValue(e.target.value)}
                        onBlur={()=> handleBlur()}
                        value={inputValue}
                    />
                
            </div>
		</footer>
	)
    
}

export default Footer