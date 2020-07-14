import React from 'react'
import Data from '../JSON/homeprojects.json'
import Pdf from '../../Document/Resume.pdf'
import { Link } from 'react-router-dom';


function homecontent() {

    return (

        <div className="Home">

            <section className='aboutMe'>

                <p >I am an aspiring web developer ready to raise the bar in our ever changing world of technology. Living in Charlotte NC where change is in every corner, Im intrigued to transform the web just as my environment. Lets work together and create something new, not just for us but for the foundation of the future. </p>

            </section>
            <section className='skills'>
                <ul>
                    
                    <li ><img src={require('../../img/html.png')} alt="html" /> </li>
                    <li ><img src={require('../../img/css.png')} alt="css" /> </li>
                    <li ><img src={require('../../img/js.png')} alt="js" /> </li>
                    <li ><img src={require('../../img/node.png')} alt="node" /> </li>
                    <li ><img src={require('../../img/react.png')} alt="react" /> </li>
                    <li ><img src={require('../../img/mongodb.png')} alt="mongodb" /> </li>
                </ul>
            </section>
        <section className="resume">
            <button className='resumeButton'><a href={Pdf} target="_blank" rel="noopener noreferrer" className='resumeButton'> Resumé</a></button>
        </section>
        <p className="highlights"> My Projects </p>
        <div className="project-container">

            {Data.map((value) => {
                return (
                    <section className="project-box">
                        <img src={value.thumbnail} alt="thumbnail" className="thumbnail" />
                        <p className="title">{value.title}</p>
                        <ul className="button-container">
                            <li><a href={value.netlifyButton} target="_blank" rel="noopener noreferrer" className='button'>Netlify</a></li>
                            <li><a href={value.githubButton} target="_blank" rel="noopener noreferrer" className='button'>GitHub</a></li>
                        </ul>

                    </section>
                )
            })}

        </div>
        <div className='more-container'>

            <Link to='/projects' className='moreProjects' >More Projects...</Link>
        </div>

            </div >

        )


}



export default homecontent;