import React from 'react';
import FilterContent from './FilterContent';

const Filter = ({isOpen}) => {
   const arr=["date of registration","vendor score","rating","status","type of business","location","assign to"]
  return (


    <>
      {isOpen && <> 
      <div className="filter-box">
        <div className='placeholder'>
            <p>Refine by</p>
            <button>clear</button>
        </div>
      {arr.map((ele,i)=>{
        return <div>
            <div className='filter-items'>
                <p>
                    {ele}
                </p>
                <button>{">"}</button>
            </div>
        
        </div>
      })}
       </div>
      
      </> }
    </>
  );
}

export default Filter;
