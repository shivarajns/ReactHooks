import { useState,useEffect } from "react";
function Timer() {

const [seconds, setSeconds]=useState(0);

useEffect( ()=> {
    let interval = setInterval( ()=>{
        setSeconds(prev=>prev+1);
    }, [1000] )

    return () => clearInterval(interval);
}, [])


return(
    <>
    <div>Seconds: {seconds}</div>
    </>
);

}
export default Timer;