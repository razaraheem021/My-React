import React, {useState} from 'react'

function CheckingCountHook() {
    const initialValue=0;
    const [count, setCount]=useState(initialValue)
    function increment(){
        setCount(prevCount=>prevCount+5)
    }
  return (
    <div>CheckingCountHook
        Count:{count}
    <button onClick={() =>setCount(initialValue)}>Reset</button>
    <button onClick={() =>setCount(prevCount=>prevCount+1)}>Add</button>
    <button onClick={() =>setCount(prevCount=>prevCount-1)}>Sub</button>
    <button onClick={increment}>Count onward</button>
    </div>
  )
}

export default CheckingCountHook