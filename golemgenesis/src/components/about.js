import React from 'react'
import Golemgray from '../assets/images/golemgray.jpg'


class About extends React.Component{
    render(){
        return(
            // <div id="featured" className="card border-dark bg-dark text-white mb-12 content-justify-center">
            //     <img src={Golemgray} alt="featured Book" className="card-img-top" alt="..." />

            //     <div className="card-body bg-light">
            //         <h1 className="card-title">Golem Genesis</h1>
            //         <h4 className="card-text">In the world of Terra, Humans and Golems live side by side. Golems are living monoliths, beings that come from an ancient race of warriors and protectors.  
            //         Golems still battle today in the G-Arena where Golems and their Guardians battle each other for the title of Gladiator Supreme. Chris Carter, the son of a world renowned Golem specialist gone missing, finds a Golem buried in a cave on his way home from school. After helping him out of the cave and protecting him in his first fight, 
            //         the Golem takes to him and Chris finds, not only a new friend but a new adventure to embark on full of lots of awesome battles and new Golems. Let's Rock!</h4>
            //         <a href="https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true" target='_blank' className='btn btn-outline-dark'>Purchase here!</a>
            //         <h6 className="card-text"><small className="text-muted">RZN8 Print and Publishing</small></h6>
            //     </div>
            // </div>
            <div id="featured" className="card border-dark bg-dark text-white mb-4 content-justify-center" style={{width:1000}}>
            <div className="card bg-dark text-white">
  <img className="card-img" src={Golemgray} alt="Card image"/>
  <div className="card-img-overlay">
    <h1 className="card-title" style={{fontSize:"75px"}}>Golem Genesis</h1>
    <h4 className="card-text" style={{fontSize:45}}>In the world of Terra, Humans and Golems live side by side. Golems are living monoliths, beings that come from an ancient race of warriors and protectors.         
    Golems still battle today in the G-Arena where Golems and their Guardians battle each other for the title of Gladiator Supreme. Chris Carter, the son of a world renowned Golem specialist gone missing, finds a Golem buried in a cave on his way home from school. After helping him out of the cave and protecting him in his first fight, 
    the Golem takes to him and Chris finds, not only a new friend but a new adventure to embark on full of lots of awesome battles and new Golems. Let's Rock!</h4>
    <h4 className="card-text">Last updated 3 mins ago</h4>
  </div>
</div>
</div>
        )
    }
}

export default About;