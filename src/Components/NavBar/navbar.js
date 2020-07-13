import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){

    return(
<div className= "navContainer">

<header className="logo">
<img src= {require('../../img/logojp.png')} alt="logo"/>
</header>
<p className="name"> Jose Perez </p>
<nav className='navBar'>
    <ul>
    <li > <Link to='/' className='Navbutton'>Home</Link></li>
        <li ><Link to='/projects' className='Navbutton'>Projects</Link></li>
        <li ><Link to='/contact' className='Navbutton'>Contact</Link></li>
    </ul>
</nav>

</div>
    );
}


export default NavBar;