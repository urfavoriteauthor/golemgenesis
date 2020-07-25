import React from 'react';
import './assets/css/golem.css'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home'
import Golems from './pages/golems'
import Comicbooks from './pages/comicbooks'
import Social from './pages/social'

function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
      <Navbar/>
            <Route exact path='/'component={Home} />
            <Route path='/golems' component={Golems} />
            <Route path='/comicbooks' component={Comicbooks} />
            <Route path='/social' component={Social} />
            
                
      
    </Switch>
    
</Router>
    </div>
  );
}

export default App;
