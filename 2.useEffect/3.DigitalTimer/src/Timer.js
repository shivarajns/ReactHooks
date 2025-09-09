import { useEffect, useState } from "react";

function Timer(){
    const[time, setTime] = useState(new Date());

    useEffect( ()=> {
        let Time = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return() => clearInterval(Time)
    }, [] )

    let formateTime = time.toLocaleTimeString();
    let formateDate = time.toLocaleDateString();
    return(
        <>
        <div className="Timer-cont">
            <div className="Heading">Digital Clock</div>
            
            <div className="Time-container">{formateTime}</div>
            <div className="Date-container">{formateDate}</div>
        </div>
        </>
    )
}

export default Timer