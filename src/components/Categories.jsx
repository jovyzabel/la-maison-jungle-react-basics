import '../styles/Categories.css';

export default function Categories({setCategory, categories, currentCategory}) {
    
    return (
        <div className='lmj-categories' >
            <select onChange={(e)=> setCategory(e.target.value)} value={currentCategory} className='lmj-categoryies-select'>
                <option value="" style={{backgroundColor: "#31b572"}}>...</option>
                {categories.map((cat)=> 
                        <option key={cat} value={cat}>{cat}</option>
                    )}
            </select>
            &nbsp;
            <button onClick={() => setCategory('')} className='lmj-reset-btn'>Réinitialiser</button>
        </div>
    )
}