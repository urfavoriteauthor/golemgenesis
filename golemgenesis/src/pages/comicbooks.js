import React from 'react'
import Navbar from '../components/navbar'

class Comicbooks extends React.Component{
    render(){
        return(
            <div id='comics'> 
            <Navbar/>
                <p>Comic Books</p>
            </div>
        )
    }
}

export default Comicbooks;