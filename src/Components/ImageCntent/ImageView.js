import React from 'react';
import profile1 from '../../Images/profile1.jpg' ;
import classes from '../ImageCntent/image.module.css';
const ImageView = (props)=>{
 
    return(
     <div className={classes.mainDiv}>
     {/* <img src="..." class="rounded float-left" alt="profile1"/> */}
     <article>
     <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt="Bertie Yates" />
      <h3>Raveena Kholia</h3>
      <p>25 Years</p>
     </article>
     </div>
 )
}

export default ImageView