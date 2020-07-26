import React from 'react'
import Navbar from '../components/navbar'
import Lunar from '../assets/images/Lunar.png'
import Ajani from '../assets/images/ajani.png'
import Midas from '../assets/images/Midas.JPG'
import Slideshow from '../components/slideshow'

class Golems extends React.Component{
    render(){
        return(
            <div id='golem'>
                <Navbar/>
                <p>Golems</p>
                {/* Carousel */}
                <Slideshow/>
                <div>

                </div>
                
            </div>
        )
    }
}

export default Golems;