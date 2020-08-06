import React from 'react'
import Slider from 'react-slick'
// import { baseUrl } from "./config";
import Ajani from '../assets/images/ajani.png'
import Pompeii from '../assets/images/pompeii.png'
import Midas from '../assets/images/Midas.png'
import Cutter from '../assets/images/ChrisCutter2.JPG'
import Brooklyn from '../assets/images/Brooklyn.png'
import Sahara from '../assets/images/Sahara.png'
import Lunar from '../assets/images/Lunar.png'
import Everest from '../assets/images/everest.PNG'
import Avalanche from '../assets/images/avalance.JPG'
import Pacifica from '../assets/images/Pacifica.png'
import Quartz from '../assets/images/SophiaQ.PNG'
import Raijin from '../assets/images/Raijin.jpg'
import Navbar from './navbar'

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
         centerPadding: "380px",
         focusOnSelect: true,
         useCss: true,
         slide: "div",
        //  adaptiveHeight: true,
        }
        return(

              <div className='slider'>
                  {/* <Navbar/> */}
            <Slider ref={c => (this.slider = c)} {...settings} id='slider'>
<div id='slideOne'>
    <img src={Cutter} width='800px'/>
    <h1>Name:Cutter</h1>
    <h4>Elemental Nature:Dual Type-Stone</h4>
    <h4>Special Move:One Million Karat Krusher</h4>
    <h4>Profile:Found in a Cave Underground, Cutter has a passive ability known as Pressure, 
        which allows his strength and speed to compound exponentially as long as he's fighting.</h4>
</div>
<div id='slideOne'>
    <img src={Midas} width='800px'/>
    <h1>Name:Midas</h1>
    <h4>Elemental Nature:Stone-Gold</h4>
    <h4>Special Move:Midas Touch</h4>
    <h4>Profile:Nicknamed the King of Golems, Midas is composed of pure gold. 
        His ability Midas Touch, allows him to turn anything into gold.</h4>
</div>
<div id='slideOne'>
    <img src={Brooklyn} width='800px'/>
    <h1>Name:Alpha</h1>
    <h4>Elemental Nature:Dual Type-Variant/Stone</h4>
    <h4>Special Move:Big Bang</h4>
    <h4>Profile:Comprised of Nuclear Pasta, the hardest Known substance in the universe, 
        boasts near impenetrable offensive and defensive capabilities.
    </h4>
</div>
<div id='slideOne'>
    <img src={Ajani} width='800px'/>
    <h1>Name:Omega</h1>
    <h4>Elemental Nature:Dual Type-Variant/Stone</h4>
    <h4>Special Move:Giga Crusher</h4>
    <h4>Profile:With an Osmium body that can take an immense amount of punishment, 
        Omega is able to wear down its opponents through force and stamina.
    </h4>
</div>
<div id='slideOne'>
    <img src={Pompeii} width='800px'/>
    <h1>Name:Pompeii</h1>
    <h4>Elemental Nature:Elemental-Volcano</h4>
    <h4>Special Move:Incinerate</h4>
    <h4>Profile:Birthed in a Volcano, Pompeii when enraged is able to emit temperatures so intense from her body
        that her guardian must wear protective gear to keep from being melted.
    </h4>
</div>
<div id='slideOne'>
    <img src={Avalanche} width='800px'/>
    <h1>Name:Avalanche</h1>
    <h4>Elemental Nature:Variant-Tundra</h4>
    <h4>Special Move:Absolute Zero</h4>
    <h4>Profile:Having total control over cryo-techniques, Avalanche is able to 
        spontaneously create weapons and other items by freezing the water molecules in the air.
    </h4>
</div>
<div id='slideOne'>
    <img src={Everest} width='800px'/>
    <h1>Name:Everest</h1>
    <h4>Elemental Nature:Stone-Boulder</h4>
    <h4>Special Move:Rock and Roller</h4>
    <h4>Profile:A heavy duty golem with a surprisingly quick special move. 
        Everest is a very balanced combat type Golem</h4>
</div>
<div id='slideOne'>
    <img src={Pacifica} width='800px'/>
    <h1>Name:Pacifica</h1>
    <h4>Elemental Nature:Variant-Island</h4>
    <h4>Special Move:Coconut Bomber</h4>
    <h4>Profile:A fun loving Golem with a heart for battle, Pacifica is able to 
        utilize the vines in her hair to keep opponents at a distance.</h4>
</div>
<div id='slideOne'>
    <img src={Lunar} width='800px'/>
    <h1>Name:Lunaris</h1>
    <h4>Elemental Nature:Variant-Moonstone</h4>
    <h4>Special Move:Eclipse</h4>
    <h4>Profile:A mysterious golem that is rumored to have come from the moon, 
        Lunaris grows more powerful at night.</h4>
</div>
<div id='slideOne'>
    <img src={Quartz} width='800px'/>
    <h1>Name:Q</h1>
    <h4>Elemental Nature: Stone-Smoky Quartz</h4>
    <h4>Special Move:Ultimate Prism</h4>
    <h4>Profile:By utilizing and bending light waves, Q is able to attack from a distance,
        and also create images of itself to confuse enemies.
    </h4>
</div>
<div id='slideOne'>
    <img src={Raijin} width='800px'/>
    <h1>Name:Raijin</h1>
    <h4>Elemental Nature: Stone-Tungsten</h4>
    <h4>Special Move:Thunderbolt punch</h4>
    <h4>Profile:Raijin was worshipped as a God of Thunder in previous generations. 
        Although he can't produce elecctricity, he is able to channel it and attract it by charging the particles in the air.
    </h4>
</div>
<div id='slideOne'>
    <img src={Sahara} width='800px'/>
    <h1>Name:Sahara</h1>
    <h4>Elemental Nature:Variant-Desert</h4>
    <h4>Special Move:Midas Touch</h4>
    <h4>Profile:Able to shift the sands around her, Sahara can dissolve and reassemble herself at will.
        She is also able to grow her size by taking on additional sand.
    </h4>
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