import React from 'react'

function Footer(){

        return(
            <div className='footerContainer'>

            <footer className='footer'>

                <nav className='footerNav'>
                    <ul>
                    <li><a href="https://github.com/Jrez300" target="_blank" rel="noopener noreferrer"><img src={require('../../img/githubW.png')} alt="fb" /></a></li>
                    <li><a href="https://www.linkedin.com/in/joseperez940/" target="_blank" rel="noopener noreferrer"><img src={require('../../img/linkedinW.png')} alt="fb" /></a></li>
                    </ul>

                </nav>
            <p className='updated'>Last Update: 7/17/2020</p>
            </footer>
        </div>




        );


    }

export default Footer;