import React, { useEffect, useState } from 'react';

function Hook2(){
  const [count,setCount] = useState(0);
  const [X,setX] = useState(0);
  const [Y,setY] = useState(0);
  useEffect(()=>{
     // document.title= `You clicked ${count} times`
     console.log('Use effect called');
     window.addEventListener('mousemove',mouseEvent)

     return ()=>{
         window.removeEventListener('mousemove' , mouseEvent)
     }
  },[])

  const mouseEvent = (e)=>{
    console.log("Move event called");
    setX(e.clientX);
    setY(e.clientY);
  }
return(
 
 <div>
   X - {X} Y- {Y}
   <button className="btn btn-success" onClick={()=>setCount(count+1)}>Clicked {count} times</button>
</div>
)


}

export default Hook2;