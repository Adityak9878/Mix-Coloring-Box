function PropertyList({name,price,rating}){
return (
    <div>
        <h2>{name}</h2>
        <h3 style={{color:"green"}}>{price}</h3>
        <h4>{rating}⭐️</h4>
    </div>
)
}

export default PropertyList

