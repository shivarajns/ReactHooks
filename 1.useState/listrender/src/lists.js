function Lists(){
const fruits = ["Apple", "Mango", "Bananna", "Orange"]

return(
    <>
        <h2>Fruits</h2>
        <ul>
            {fruits.map((fruit, index)=>{
               return <li key={index}>{fruit}</li>
            })}
        </ul>
    </>
)

}

export default Lists