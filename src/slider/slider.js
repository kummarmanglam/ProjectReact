import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slider.css';

import ImageRotate from "../Image-Rotation/imageRotation";
 
const slideImages = [
    
    <ImageRotate/>,
    <ImageRotate/>
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>

          <div className="each-slide">
            <div >
            <ImageRotate/>
            <ImageRotate/>
            <ImageRotate/>
            </div>
          </div>
          <div className="each-slide">
            <div >
            <ImageRotate/>
            </div>
          </div>
          <div className="each-slide">
            <div >
            <ImageRotate/>
            </div>
          </div>
          
        </Slide>
      </div>
    )
}

export default Slideshow;