import React from 'react'
import { Link} from 'react-router-dom'
import '../assets/css/golem.css'
import Cutterchibi from '../assets/images/cutterchibi.png'
import Pompeiichibi from '../assets/images/pompeiichibi.png'
import Midaschibi from '../assets/images/midaschibi.png'
import Avalanchechibi from '../assets/images/avalanchechibi.png'

class Navbar extends React.Component{
    render(){
        return(
<nav>
                 <ul className='nav ml-auto' id='navbar'>
              
            <Link to='/'>

                <li className="nav-item"><img src={Cutterchibi}/>Home</li>
            </Link>
            <Link to='/golems'>
                <li className="nav-item"><img src={Pompeiichibi}/>Golems</li>
            </Link>
            <Link to='/comicbooks'>
                <li className="nav-item"><img src={Midaschibi}/>Comics</li>
            </Link>
            <Link to='/social'>
                <li className="nav-item"><img src={Avalanchechibi}/>Social</li>
            </Link>
            </ul>
            </nav>
        )
    }
}

export default Navbar;