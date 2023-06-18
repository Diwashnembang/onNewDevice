import { useEffect, useState } from 'react';
import './App.css';

const App =()=>{

  const[count,setCount]= useState(0);
  const[ r,setR]= useState(0);

  const add =()=>{
    setCount(count + 1);
  }

  useEffect(()=>{{
    if(r>=255) return;
    setR(r+25)
  }},[count])


return(
  <> 
  <div style={{color:`rgb(${r},${count * 1.5},${r})`}}> 
  <p>hello world from my new surface pro</p>
  <p>this is my first work =  {count}</p>
  <button  onClick={add}>Add</button>
  <p> this is rgb value {r} </p>
  </div>
  </>
)
}


export default App
