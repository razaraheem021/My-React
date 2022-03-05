import React,{useState} from 'react'

function FirstHook() {
    const [count,setCounter]=useState(0)
  return (
    <div>FirstHook
        <button onClick={()=>setCounter(count+1)}>Count {count}</button>
    </div>
  )
}

export default FirstHook