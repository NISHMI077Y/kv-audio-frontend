import { useState } from "react"


export default function Testing(){
  const[count,setCount]  = useState(0)


    return(
    <div className="w-full bg-amber-200 h-screen flex flex-col justify-center items-center">
        <h1 className="text-9xl"> {count}</h1>

        <button className="w-[100px] h-[60px] bg-black text-3xl text-white rounded-lg" onClick={
            ()=>{

                const newCount =count + 1
                setCount(newCount)
              
            }
        } > Count 
       </button>
    </div>

    )
}