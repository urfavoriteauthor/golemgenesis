import React from 'react'
import Navbar from '../components/navbar';
import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.jpg'
import Instagram from '../assets/images/instagram.png'
import Patreon from '../assets/images/patreon.jpeg'
import RZN8 from '../assets/images/RZN8.png'
import Cutter from '../assets/images/ChrisCutter.png'


class Social extends React.Component{
    render(){
        return(
            <div id='social'>
                <Navbar/>
                <p>Social Media for Golem Genesis</p>
                <h3 style={{color:"white"}}>Follow us on Social Media for updates and new content!</h3>
                <img id='cutter'src={Cutter}/>
            <nav>
                    <ul className='social'>
                        <a href='https://www.facebook.com/mrnmporterfield/' target='_blank'><li id='facebook'><img src={Facebook} alt='' width='50px' />Facebook</li></a>
                        <a href='https://www.instagram.com/urfavoriteauthor/' target="_blank"><li id='instagram'><img src={Instagram} alt='' width='50px' />Instagram</li></a>
                        <a href='https://twitter.com/URxFAVxAUTHOR' target="_blank"><li id='twitter'><img src={Twitter} alt='' width='50px' />Twitter</li></a>
                        <a href='https://www.patreon.com/Urfavoriteauthor' target='_blank'><li id='patreon'><img src={Patreon} alt='' width='100px' />Patreon</li></a>
                        <a href='http://resonate-publishing.com/' target='_blank'> <li id='patreon'><img src={RZN8} alt='' width='100px' />RZN8 Publishing</li></a>
                    </ul>
            </nav>
                </div>
            
        )
    }
}

export default Social;