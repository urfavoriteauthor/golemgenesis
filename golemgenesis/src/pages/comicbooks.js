import React from 'react'
import Navbar from '../components/navbar'
import Comics from '../components/comic'
import Cover from '../assets/images/GolemGenesisCoverOne.jpg'
import Chris from '../assets/images/ChrisCutter.png'

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
                <div id='comicbookss'> 
                    <div className='col-sm-4'>
                    <Comics imgsrc={Cover} title='Golem Genesis: Issue#1 Rocky Beginnings' 
                description='Chris Carter while on his way home stumbles across a HeartStone. After being chased by a bully and his golem Everest, he stumbles upon a Golem hidden in a cave below ground. Now, in his first Golem Battle ever, Chris and his new ally must find a way to defeat his attacker and make it home safe.'
                link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
                        
                    </div>
                    <div className='col-sm-4'>
                    <Comics imgsrc={Chris} title='Golem Genesis: Issue#2 Rocky Beginnings' 
                description='Coming Soon!'
                link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
                    </div>
                    <div className='col-sm-4'>
                    <Comics imgsrc={Chris} title='Golem Genesis: Issue#3 Rocky Beginnings' 
                description='Coming Soon!.'
                link='https://urfavoriteauthor.square.site/product/golem-gladiator-s-rock-issue-1/14?cs=true'/>
                    </div>
            </div>
            </div>
            </div>

        )
    }
}

export default Comicbooks;