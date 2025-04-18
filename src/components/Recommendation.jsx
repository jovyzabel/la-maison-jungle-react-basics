function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring= currentMonth >= 2 && currentMonth <= 5;
    return (
        <div>
            {isSpring ? <div>C'est le printemps, remportez! 🍀</div> : <div>Ce n'est pas le moment de remporter</div>}
        </div>
  );
}
export default Recommendation;

