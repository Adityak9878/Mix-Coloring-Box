import { useState } from "react";

export default function Toddler(){
    const [isHappy,setHappy] = useState(true);
    const ToToggle = () =>{
        setHappy(!isHappy);
    }
return (
    <h1 onClick={ToToggle}>
        {isHappy ? ":)" : ":("}
    </h1>
);
}