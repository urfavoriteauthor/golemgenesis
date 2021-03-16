import React from 'react'
import Navbar from '../components/navbar'
import Comics from '../components/comic'
import Cover from '../assets/images/GolemGenesisCoverOne.jpg'
import Chris from '../assets/images/ChrisCutter.png'
import Covertwo from '../assets/images/GolemCover2.jpg'
import Coverthree from '../assets/images/Issue3Cover.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Comicbooks extends React.Component{
    render(){
        return(
            
            <div  className="container-fluid d-flex content-justify-center">
            <Navbar/>
            <div className='row'>
<div>           
                <p id='comictitle'>Comic Books</p>
    <h4 id='comicsubtitle' style={{color:"white"}}>Check Out our Comic Books!</h4>
</div>     
                {/* <div id='comicbooks'> 
                    <div className='col-sm-4'>
                    <Comics imgsrc={Cover} title='Golem Genesis: Issue#1 Rocky Beginnings' 
                description='Chris Carter while on his way home stumbles across a HeartStone. After being chased by a bully and his golem Everest, he stumbles upon a Golem hidden in a cave below ground. Now, in his first Golem Battle ever, Chris and his new ally must find a way to defeat his attacker and make it home safe.'
                link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
                        
                    </div>
                    <div className='col-sm-4'>
                    <Comics imgsrc={Covertwo} title='Golem Genesis: Issue#2 Iron-Willed Initiation' 
                description='Coming Soon!'
                link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
                    </div>
                    <div className='col-sm-4'>
                    <Comics imgsrc={Coverthree} title='Golem Genesis: Issue#3 Ice-Cold Prodigy' 
                description='Coming Soon!.'
                link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
                    </div>
            </div> */}
            <CardGroup  id='cardgroup'>
  <Card  bg='dark' text='light' >
    <Card.Img className='overflow' variant="top" src={Cover} />
    <Card.Body text='light'>
      <Card.Title>Golem Genesis Issue#1</Card.Title>
      <Card.Text text='light'>
      <h4>Chris Carter while on his way home stumbles across a HeartStone. After being chased by a bully and his golem Everest, he stumbles upon a Golem hidden in a cave below ground. Now, in his first Golem Battle ever, Chris and his new ally must find a way to defeat his attacker and make it home safe</h4>      
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
      <h4>Chris Carter while on his way home stumbles across a HeartStone. After being chased by a bully and his golem Everest, he stumbles upon a Golem hidden in a cave below ground. Now, in his first Golem Battle ever, Chris and his new ally must find a way to defeat his attacker and make it home safe</h4>      
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
      <h4>Chris Carter while on his way home stumbles across a HeartStone. After being chased by a bully and his golem Everest, he stumbles upon a Golem hidden in a cave below ground. Now, in his first Golem Battle ever, Chris and his new ally must find a way to defeat his attacker and make it home safe</h4>      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
            </div>

        )
    }
}

export default Comicbooks;