import React from 'react'
import Slider from 'react-slick'
// import { baseUrl } from "./config";
import Ajani from '../assets/images/ajani.png'
import Pompeii from '../assets/images/pompeii.png'
import Midas from '../assets/images/Midas.png'
import Cutter from '../assets/images/ChrisCutter2.JPG'
import Brooklyn from '../assets/images/Brooklyn.PNG'
import Sahara from '../assets/images/Sahara.png'
import Lunar from '../assets/images/Lunar.png'
import Everest from '../assets/images/everest.PNG'
import Avalanche from '../assets/images/avalance.JPG'
import Pacifica from '../assets/images/Pacifica.png'
import Quartz from '../assets/images/SophiaQ.PNG'
import Raijin from '../assets/images/Raijin.jpg'
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
    <img src={Cutter} width='800px'/>
    <h1>Name:Cutter</h1>
    <h5>Elemental Nature:Dual Type-Stone</h5>
    <h5>Special Move:One Million Karat Krusher</h5>
    <h5>Profile:Found in a Cave Underground, Cutter has a passive ability known as Pressure, 
        which allows his strength and speed to compound exponentially as long as he's fighting.</h5>
</div>
<div id='slideOne'>
    <img src={Midas} width='800px'/>
    <h1>Name:Midas</h1>
    <h5>Elemental Nature:Stone-Gold</h5>
    <h5>Special Move:Midas Touch</h5>
    <h5>Profile:Nicknamed the King of Golems, Midas is composed of pure gold. 
        His ability Midas Touch, allows him to turn anything into gold.</h5>
</div>
<div id='slideOne'>
    <img src={Brooklyn} width='800px'/>
    <h1>Name:Alpha</h1>
    <h5>Elemental Nature:Dual Type-Variant/Stone</h5>
    <h5>Special Move:Big Bang</h5>
    <h5>Profile:Comprised of Nuclear Pasta, the hardest Known substance in the universe, 
        boasts near impenetrable offensive and defensive capabilities.
    </h5>
</div>
<div id='slideOne'>
    <img src={Ajani} width='800px'/>
    <h1>Name:Omega</h1>
    <h5>Elemental Nature:Dual Type-Variant/Stone</h5>
    <h5>Special Move:Giga Crusher</h5>
    <h5>Profile:With an Osmium body that can take an immense amount of punishment, 
        Omega is able to wear down its opponents through force and stamina.
    </h5>
</div>
<div id='slideOne'>
    <img src={Pompeii} width='800px'/>
    <h1>Name:Pompeii</h1>
    <h5>Elemental Nature:Elemental-Volcano</h5>
    <h5>Special Move:Incinerate</h5>
    <h5>Profile:Birthed in a Volcano, Pompeii when enraged is able to emit temperatures so intense from her body
        that her guardian must wear protective gear to keep from being melted.
    </h5>
</div>
<div id='slideOne'>
    <img src={Avalanche} width='800px'/>
    <h1>Name:Avalanche</h1>
    <h5>Elemental Nature:Variant-Tundra</h5>
    <h5>Special Move:Absolute Zero</h5>
    <h5>Profile:Having total control over cryo-techniques, Avalanche is able to 
        spontaneously create weapons and other items by freezing the water molecules in the air.
    </h5>
</div>
<div id='slideOne'>
    <img src={Everest} width='800px'/>
    <h1>Name:Everest</h1>
    <h5>Elemental Nature:Stone-Boulder</h5>
    <h5>Special Move:Rock and Roller</h5>
    <h5>Profile:A heavy duty golem with a surprisingly quick special move. 
        Everest is a very balanced combat type Golem</h5>
</div>
<div id='slideOne'>
    <img src={Pacifica} width='800px'/>
    <h1>Name:Pacifica</h1>
    <h5>Elemental Nature:Variant-Island</h5>
    <h5>Special Move:Coconut Bomber</h5>
    <h5>Profile:A fun loving Golem with a heart for battle, Pacifica is able to 
        utilize the vines in her hair to keep opponents at a distance.</h5>
</div>
<div id='slideOne'>
    <img src={Lunar} width='800px'/>
    <h1>Name:Lunaris</h1>
    <h5>Elemental Nature:Variant-Moonstone</h5>
    <h5>Special Move:Eclipse</h5>
    <h5>Profile:A mysterious golem that is rumored to have come from the moon, 
        Lunaris grows more powerful at night.</h5>
</div>
<div id='slideOne'>
    <img src={Quartz} width='800px'/>
    <h1>Name:Q</h1>
    <h5>Elemental Nature: Stone-Smoky Quartz</h5>
    <h5>Special Move:Ultimate Prism</h5>
    <h5>Profile:By utilizing and bending light waves, Q is able to attack from a distance,
        and also create images of itself to confuse enemies.
    </h5>
</div>
<div id='slideOne'>
    <img src={Raijin} width='800px'/>
    <h1>Name:Raijin</h1>
    <h5>Elemental Nature: Stone-Tungsten</h5>
    <h5>Special Move:Thunderbolt punch</h5>
    <h5>Profile:Raijin was worshipped as a God of Thunder in previous generations. 
        Although he can't produce elecctricity, he is able to channel it and attract it by charging the particles in the air.
    </h5>
</div>
<div id='slideOne'>
    <img src={Sahara} width='800px'/>
    <h1>Name:Sahara</h1>
    <h5>Elemental Nature:Variant-Desert</h5>
    <h5>Special Move:Midas Touch</h5>
    <h5>Profile:Able to shift the sands around her, Sahara can dissolve and reassemble herself at will.
        She is also able to grow her size by taking on additional sand.
    </h5>
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