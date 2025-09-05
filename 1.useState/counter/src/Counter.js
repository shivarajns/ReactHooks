import { useState } from "react"

function Counter(){

    const[count, nextCount] = useState(0);

    return(
        <>
            <div className="Counter">
                <h3>Counter</h3>
                <h1>{count}</h1>
                <div className="buttons">
                    <button onClick={()=>nextCount(prev => prev + 1)}>Increment</button>
                    <button onClick={()=>nextCount(prev => prev - 1)}>Decrement</button>
                    <button onClick={()=>nextCount(0)}>Reset</button>
                </div>
            </div>
        </>
    )
}
export default Counter