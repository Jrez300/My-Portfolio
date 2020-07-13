import React from 'react';
import './styles/portfolio.css';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Project from './Components/Pages/Projects'
import{Route} from 'react-router-dom'

function App(){

  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/projects' component={Project}/>
     
    </div>
  );
}


export default App;
