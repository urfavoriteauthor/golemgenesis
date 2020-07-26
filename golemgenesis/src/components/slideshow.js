import React from 'react'
import Slider from 'react-slick'
// import { baseUrl } from "./config";
import Ajani from '../assets/images/ajani.png'
import Pompeii from '../assets/images/pompeii.png'
import Midas from '../assets/images/Midas.png'
import { render } from 'react-dom'

class Slideshow extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    render(){
        var settings = {
            dots: true,
         fade: true,
         infinite: true,
         speed: 500,
         centerMode:true,
         slidesToShow: 1,
         slidesToScroll: 1,
         dotsClass: "slick-dots slick-thumb",
         centerMode:true,
         centerPadding: "275px",
         focusOnSelect: true,
         useCss: true,
         slide: "div",
         autoPlay: true,
         autoPlaySpeed: 3000
         // adaptiveHeight: true,
        }

          return(
              <div className='slider'>
            <Slider ref={c => (this.slider = c)} {...settings} id='slider'>
<div id='slideOne'>
    <img src={Midas} width='750px'/>
    <h1>Name:Midas</h1>
    <h5>Elemental Nature:Stone</h5>
    <h5>Special Move:Midas Touch</h5>
    <h5>Profile:Nicknamed the King of Golems, Midas is composed of pure gold. 
        His ability Midas Touch, allows him to turn anything into gold.</h5>
</div>
<div>
    <img src={Ajani} width='750px'/>
</div>
<div>
    <img src={Pompeii} width='750px'/>
</div>
            </Slider>
            <div style={{ textAlign: "center" }}>
            </div>
             <button className="button" className="btn btn-dark btn-lg" onClick={this.previous}>
             Previous
           </button>
           <button className="button"className="btn btn-dark btn-lg" onClick={this.next}>
             Next
           </button>
           </div>
           
          );
          }
          }
          
    
export default Slideshow;