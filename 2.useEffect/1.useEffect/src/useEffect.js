import { useState, useEffect} from "react";

function UseEffect(){
const [counter, setCounter] = useState(0);

useEffect( ()=>{
    document.title = `Count is: ${counter}` 
} ,[counter])

return(
    <>
    <div className="counter">
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(prev=>prev+1)}>count</button>    
    </div>    
    </>
)

}

export default UseEffect;