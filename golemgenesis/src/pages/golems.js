import React from 'react'
import Navbar from '../components/navbar'
import Lunar from '../assets/images/Lunar.png'
import Ajani from '../assets/images/ajani.png'
import Midas from '../assets/images/Midas.JPG'
import Slideshow from '../components/slideshow'

class Golems extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
            <div >

                <p id='golemtitle'>Golems</p>
                <h4>With over 100 different Golem types, there's no end to the excitement.</h4>
                <Slideshow/>
                </div>
</div>

                
        )
    }
}

export default Golems;