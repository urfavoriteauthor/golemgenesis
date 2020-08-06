import React from 'react'
import '../assets/css/golem.css'
import Navbar from '../components/navbar'
import About from '../components/about'

class Home extends React.Component{
    render(){
        return(
            <div id='home'>
                <Navbar/>
                <p>Home</p>
                <About/>
            </div>
        )
    }
}

export default Home;