import React from 'react'
import '../assets/css/golem.css'
import Navbar from '../components/navbar'

class Home extends React.Component{
    render(){
        return(
            <div id='home'>
                <Navbar/>
                <p>Home</p>
            </div>
        )
    }
}

export default Home;