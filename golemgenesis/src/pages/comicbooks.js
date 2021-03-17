import React from 'react'
import Navbar from '../components/navbar'
import Comics from '../components/comic'
import Cover from '../assets/images/GolemGenesisCoverOne.jpg'
import Chris from '../assets/images/ChrisCutter.png'
import Covertwo from '../assets/images/GolemCover2.jpg'
import Coverthree from '../assets/images/Issue3Cover.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

class Comicbooks extends React.Component{
    render(){
        return(
          <div>
              <Navbar/>
            <div>
                <p id='comictitle'>Comic Books</p>
    <h3 id='comicsubtitle' style={{color:"white"}}>Check Out our Comic Books!</h3>
          <div  className="container-fluid d-flex content-justify-center overflow">
            <div className='row'>
<div>           
</div>     
            <CardGroup  id='cardgroup'>
  <Card  bg='dark' text='light' >
    <Card.Img  variant="top" src={Cover} />
    <Card.Body text='light'>
      <Card.Title>Golem Genesis Issue#1</Card.Title>
      <Card.Text text='light'>
      <h4>Chris Carter while on his way home stumbles across a HeartStone. After being chased by a bully and his golem Everest, he stumbles upon a Golem hidden in a cave below ground. Now, in his first Golem Battle ever, Chris and his new ally must find a way to defeat his attacker and make it home safe</h4>      
      <Button href='https://urfavoriteauthor.square.site/product/golem-genesis-rocky-beginnings-issue-1/14?cs=true&cst=custom' variant="outline-light">Purchase Here</Button>
</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='dark'text='light'>
    <Card.Img variant="top" src={Covertwo} />
    <Card.Body text='light'>
      <Card.Title>Golem Genesis Issue#2</Card.Title>
      <Card.Text text='light'>
      <h4>Chris begins to learn what it means to be a Guardian and train with his new Golem friend Cutter. One of his classmates suggests that he comes to train at her gym, but when he shows up, he bumps into the Duo's champions and is challenged to an unofficial match. Will he and Cutter be able to pull it off?</h4>      
      <Button variant="outline-light">Coming Soon</Button>
</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='dark' text='light'>
    <Card.Img variant="top" src={Coverthree} />
    <Card.Body text='light'>
      <Card.Title>Golem Genesis Issue#3</Card.Title>
      <Card.Text text='light'>
      <h4>Cypress, the owner of the Hard Rock gym agrees to train Chris under one condition. That he last for three minutes in the arena with her strongest fighter. But Chris has never encountered someone like Samuel North and his Golem Avalanche before. Things are about to get ICY!</h4>      
      <Button variant="outline-light">Coming Soon</Button>
</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Comicbooks;