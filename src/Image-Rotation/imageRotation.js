import React, {useState} from "react";

// import logo from '../Logo/logoGA.png';
import './imageRotation.css';


const Image = () => {
const [rotating, setRotating] = useState(false)

   return (
    <div id="rotate" className={rotating ? `rotate`: `paused`} 
        onMouseEnter={ () =>setRotating(true)} 
        onMouseLeave={ () =>setRotating(false)}>
  </div>
   )
}


export default Image;