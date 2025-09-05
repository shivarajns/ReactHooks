import { useState } from "react"

function Welcome() {

    const [name, setName] = useState("")
    const [greeting, setGreeting] = useState("")

    function onClickHandler (){
        setGreeting(`Welcome ${name}`)
    }

    return (
        <>
            <div className="main-cont">
                <h1>Welcome</h1>
                <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}></input>
                <button onClick={onClickHandler}>Submit</button>
                <p>{greeting}</p>
            </div>
        </>
    )

}
export default Welcome