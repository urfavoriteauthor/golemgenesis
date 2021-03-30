import React from 'react'
import ChrisCutter from '../assets/images/ChrisCutter.png'


class About extends React.Component{
    render(){
        return(

            <div id="featured" className="card border-dark bg-dark text-white mb-4 content-justify-center">
            <div className="card bg-dark">
  <img className="card-img" id='aboutimg'src={ChrisCutter} alt="Card image"/>
  <div className="card-img-overlay">
    <h1 className="card-title" style={{fontSize:"75px"}}>Golem Genesis</h1>
    <br></br>
    <br></br>
    <br></br>
    <h4 className="card-text" id='abouttext'>In the world of Terra, Humans and Golems live side by side. Golems are living monoliths, beings that come from an ancient race of warriors and protectors.         
    Golems still battle today in the G-Arena where Golems and their Guardians battle each other for the title of Gladiator Supreme. Chris Carter, the son of a world renowned Golem specialist gone missing, finds a Golem buried in a cave on his way home from school. After helping him out of the cave and protecting him in his first fight, 
    the Golem takes to him and Chris finds, not only a new friend but a new adventure to embark on full of lots of awesome battles and new Golems. Let's Rock!</h4>
  </div>
</div>
</div>
        )
    }
}

export default About;