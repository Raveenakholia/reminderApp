import React, { useState } from 'react'
import classes from './BirthdayReminder.module.css';
import ImageView from '../ImageCntent/ImageView';

const BirthdayReminder = ()=>{
    const [list ,setList]  = useState([5])
    const btnHandler =()=>{
        setList(0);
    }
    
    return(
        <div className={classes.mainDiv}>
           <h1>{list} birthdays today</h1>
           { list>=5? <>
           <ImageView />
           <ImageView />
           <ImageView />
           <ImageView />
           <ImageView />
           </>:null }
           <button type="button" onClick={btnHandler} class={classes.Button} >Clear All</button>
        </div>
    )
}

export default BirthdayReminder;