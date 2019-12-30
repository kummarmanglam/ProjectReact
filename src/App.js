import React,{ Component } from 'react';
import './App.css';
import logo from './Logo/logoGA.png';
import swal from 'sweetalert';
import Slider from './slider/slider';

// import PropTypes from 'prop-types'; // ES6

export default class App extends Component{

  submitHandler = (event) => {
    event.preventDefault();
    let text = document.getElementById("btn");
    if( text === ""){
        alert("filled is not filled")
    }
    swal("Submitted Successfully!", "...subsribed for Goodies!");
  }

  render () {
  return (
  <div class="container">
    <div class="pageheader text-capitalize"  Style = {" background-color: aliceblue"}>
      <div className="row">
      <h5 className ="col-md-6 text-left" Style={"color: lightGreen"}>logo</h5>
      
          <p className ='' Style={"margin-right: 15px"}>About us</p>
          <p className ='' Style={"margin-right: 15px"}>Conatct us</p>
          <span Style={"margin-right: 5px"} className='text-right'>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram" Style= {"margin-top: 5px color: indianred"}></i>
            </a>
            <a href = "https://www.facebook.com/">
              <i className="fab fa-facebook" href="facebook.com"></i>
            </a>
            <a href = "https://twitter.com/?lang=en">
             <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/">
            <i className="fab fa-youtube"></i>
            </a>       
          </span> 
    </div> 
  </div>  
  <div className="row">
    <div className="col-md-6">
    <div className="pageheader text-capitalize text-center">
       <b Style={"color:lightGreen"}>Lorem</b><b> Ipsum</b> 
      </div>
      <p Style={"margin-top: 15px"}>
        Children participate in a Christmas procession in Tbilisi, Georgia on January 7, 2016. 
        Orthodox believers observe Christmas according to the Julian—rather than Gregorian—calendar.
      </p>
      <span  className='Image-Margin'>
      <img src={logo} className="App-logo"Style={"padding-bottom:10%px"} alt="logo"  />
      </span>
      <br/>
      <span>
      <i class="far fa-address-book fa-2x"></i>
      <i class="far fa-address-book fa-2x"></i>
      <i class="far fa-address-book fa-2x"></i>
      <i class="far fa-address-book fa-2x"></i>
      <i class="far fa-address-book fa-2x"></i>
      <i class="far fa-address-book fa-2x"></i>
      <i class="far fa-address-book fa-2x"></i>
      <br/>
      </span>
      <span Style={"margin-left:16px"}>
      <i class="fas fa-address-card fa-2x"></i>
      <i class="fas fa-address-card fa-2x"></i>
      <i class="fas fa-address-card fa-2x"></i>
      <i class="fas fa-address-card fa-2x"></i>
      <i class="fas fa-address-card fa-2x"></i>
      <i class="fas fa-address-card fa-2x"></i>
      <i class="fas fa-address-card fa-2x"></i>
      {/* <i class="fab fa-adversal fa-2x"></i> */}
      </span>
    </div>
    <div className ="col-md-6">
     {/*  */}
     <Slider />

  </div> 
  
  <footer className='Footer row col-md-12' Style={'margin-top:10%'}>
    <br/>
    <p className= "col-md-3"><strong>Subscribe now to get Goodies</strong></p><br/>
    <span className= "col-md-3" >FirstName: 
      <input id = "btn" type='text'/>
    </span>
    <span id = "btn" className= "col-md-3" >LastName: 
      <input type='string' />
    </span>
    <span className="col-md-3">

    <button  onClick={this.submitHandler} Style={'margin-left:20px'} className='col-md-6 col-xs-12'>sumbit</button>
    </span>
</footer>
</div>
</div>  
 
  );
}
}

// App.propTypes = {
//   type: PropTypes.string.isRequired
// }