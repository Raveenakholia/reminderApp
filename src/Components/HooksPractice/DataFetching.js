import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching = () => {
    const [post,setPost] = useState([]);
    const [id,setId] = useState('');
    const [data, setData]= useState();
   
    const handleChange =(event)=>{
        setId(event.target.value);
    }
   
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response.data.title);
           setPost(response.data)
           setData(response.data.title)
        }).catch(()=>{
          console.log('error')
        })
    },[id])

    
    return (
        <div>

        <input type="text" value={id} onChange={handleChange} />
         {data!==undefined? <li>{data}</li> :null}
            {/* <ul>
            { 
             post.map((elemt,i)=>{
                 return <li key={elemt.id}>{elemt.title}</li>
             })   
            }
            </ul> */}
        </div>
    );
};

export default DataFetching;