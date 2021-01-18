import React, { useEffect, useState } from 'react';

const HookCounter = () => {
    const [count ,setCount] = useState(0)
    
    const Increment = ()=>{
        setCount(prevcount=>prevcount+1);
    }
    useEffect(()=>{
       // console.log(`Before updating count value count is : ${count}`)
      const incrementCounter = setInterval(Increment,1000)
        return ()=>{
             clearInterval(incrementCounter);
        }
    },[])
    return (
        <div>
          {count}  
        </div>
    );
};

export default HookCounter;