import React,{useState, useEffect} from 'react'

function StopWatch() {
    const [hour, setHour]= useState(0)
    const [min, setMin]= useState(0)
    const [sec, setSec]= useState(0)
    const [ms, setMs]= useState(0)
    const [stop, setStop]= useState(false)

    const start =()=>{
        setStop(true)
    }

    const stopp = () =>{
        setStop(false)
    }

    const reset = ()=>{

    }

    const resume = ()=>{

    }

    useEffect(() => {
        
        let interval=null

        if(stop)
        {
            interval=setInterval(()=>{
                if(min>59)
                {
                    setHour(hour+1)
                    setMin(0)
                    clearInterval(interval)
                }
                if(sec>59)
                {
                    setMin(min+1)
                    setSec(0)
                    clearInterval(interval)
                }
                if(ms>=100)
                {
                    setSec(sec+1)
                    setMs(0)
                    clearInterval(interval)
                }
                if(ms<=100)
                {
                    
                    setMs(ms+1)
                    
                }
            },10)
        }
        else{
            clearInterval(interval)
        }
        return ()=>{
            clearInterval(interval)
        }
    })


  return (
    <div>
        <div>
            <h1>{hour}:{min}:{sec}:{ms} </h1>
            <button onClick={start}>Start</button>
            <button onClick={stopp}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={resume}>Resume</button>
        </div>
    </div>
  )
}

export default StopWatch