
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';
function CareScale({ scaleValue, careType }) {
    
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? (
        <img src={sun} alt="sun" />
    ) : (
        <img src={water} alt="water" />

    )
    return (
        <div onClick={() => handleClick(scaleValue, careType)} className='lmj-care-scale'>
            
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}
        </div>
    )
}

function handleClick(scaleValue, careType) {

    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
    alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : 'd\'  arrosage'}`)
}
export default CareScale;