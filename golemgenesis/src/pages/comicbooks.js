import React from 'react'
import Navbar from '../components/navbar'
import Comics from '../components/comic'
import Cover from '../assets/images/GolemGenesisCoverOne.jpg'

class Comicbooks extends React.Component{
    render(){
        return(
            <div id='comics'> 
            <Navbar/>
                <Comics imgsrc={Cover} Title='Golem Genesis: Issue#1 Rocky Beginnings' 
                Description='Chris Cutter while being chased by a bully, stumbles upon a Golem hidden in a cave below ground.'
                Link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
            </div>
        )
    }
}

export default Comicbooks;