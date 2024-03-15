import "./Property.css"
import PropertyList from "./PropertyList"

function Property({properties}){
    return <div className="Property">
        {properties.map((p)=>(
            <PropertyList name={p.name} price={p.price} rating={p.rating}/>
        ))}
    </div>
}

export default Property