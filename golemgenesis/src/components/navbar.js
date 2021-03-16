import React from 'react'
import { Link} from 'react-router-dom'
import '../assets/css/golem.css'


class Navbar extends React.Component{
    render(){
        return(
<nav>
                 <ul className='nav ml-auto' id='navbar'>
              
            <Link to='/'>
                <li className="nav-item">Home</li>
            </Link>
            <Link to='/golems'>
                <li className="nav-item">Golems</li>
            </Link>
            <Link to='/comicbooks'>
                <li className="nav-item">Comics</li>
            </Link>
            <Link to='/social'>
                <li className="nav-item">Social</li>
            </Link>
            </ul>
            </nav>
        )
    }
}

export default Navbar;