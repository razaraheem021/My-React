import React,{useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount]=useState(0)
    const [name, setName]=useState('')
    useEffect(()=>{
        console.log('useEffect')
        document.title=`this is clicked ${count} times`
    },[count])
  return (
    <div>UseEffect
        <input type="text"  value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>click ${count} </button>
    </div>
  )
}

export default UseEffect