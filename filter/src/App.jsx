import React, { useState } from 'react';
import Filter from './Components/Filter';
import { IoFilter } from "react-icons/io5";
const App = () => {
  const [isOpen,setisOpen]=useState(true)
  const handleclick=()=>{
    setisOpen(!isOpen)
  }
  return (
    <>
      <button onClick={handleclick} className='filter' ><IoFilter />  <span>filter</span></button>
      <Filter isOpen={isOpen} />
     
    </>
  );
}

export default App;
