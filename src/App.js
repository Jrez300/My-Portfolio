import React from 'react';
import './styles/portfolio.css';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import{Route} from 'react-router-dom'

function App(){

  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
     
    </div>
  );
}


export default App;
