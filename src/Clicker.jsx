function HandleClick(message){
    alert(message)
}


function Clicker({message,buttonTxt}){
    return <div>
        <button onClick={HandleClick}>{buttonTxt}</button>
    </div>
}

export default Clicker