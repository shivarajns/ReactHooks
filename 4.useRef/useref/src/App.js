import { useEffect, useRef, useState } from "react"
function App() {

    const [search, setSearch] = useState();
    const prevSearch = useRef();
    const onchange = (e) => {
        setSearch(e.target.value)
    }

    useEffect( ()=>{
        prevSearch.current = search;
    } , [search])

    return (
        <>
            <div className="cont-one">
                <input type="text" placeholder="Search Here......" value={search} onChange={onchange} />
                <div><p>Current Input: {search}</p></div>
                <div><p>Previous Input: {prevSearch.current}</p></div>
            </div>
        </>
    )
}
export default App