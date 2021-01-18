import React, { useState } from 'react';

function HookCounter(){
    const initialValue= 0;
    const [count , setCount ] = useState(initialValue)
     const [name,setName] = useState({firstName:'',lastName:''})
    return (
        <div>
            Count:{count} <br/>
            <button style={{marginLeft:'10px',marginBottom:'10px'}} className="btn btn-outline-primary" onClick={e=>setCount(initialValue)}> Reset</button>
            <button style={{marginLeft:'10px',marginBottom:'10px'}}  className="btn btn-outline-secondary" onClick={e=>setCount(prevState=>prevState+1)}> Increment</button>
            <button style={{marginLeft:'10px',marginBottom:'10px'}}  className="btn btn-outline-danger" onClick={e=>setCount(prevState=>prevState-1)}> Decrement</button>
          <form>

              <input type="text"  name ="fname"  value={name.firstName}  onChange={e=> setName({...name,firstName:e.target.value})}/>
              <input type ="text"  name="lname" value={name.lastName}    onChange={e=>setName({...name,lastName:e.target.value})} /><br/>
            <strong> My first name is : {name.firstName} and my last name is : {name.lastName}</strong> 
          </form>
        
        </div>
    )
}

export default HookCounter