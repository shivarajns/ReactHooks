import { useState } from "react"

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <div className="Counter">
        <h3>Counter</h3>
        <h1>{state}</h1>
        <div className="Buttons">
          <button onClick={() => { setState(prev => prev + 1) }}>Increment</button>
          <button onClick={() => { setState(prev => prev - 1) }}>Decrement</button>
          <button onClick={() => { setState(0) }}>Reset</button>
        </div>
      </div>

    </>
  )

}

export default App