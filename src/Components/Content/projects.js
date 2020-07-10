import React from 'react'
import Data from '../JSON/projects.json'
import Pdf from '../../Document/Resume.pdf'


function Projects() {
    
        return(
           
            <div className= "Home">
             
            <section className='aboutMe'>
            <img src={require('../../img/linkedinprofile.jpeg')} alt='profilepic' className='profilePic'/>
            <p>I am an aspiring web developer ready to raise the bar in our ever changing world of technology. Living in Charlotte NC where change is in every corner, Im intrigued to transform the web just as my environment. Lets work together and create something new, not just for us but for the foundation of the future. </p>
            
            </section>
            <section className="resume">
                <button className='resumeButton'><a href = {Pdf} target = "_blank" rel="noopener noreferrer" className='resumeButton'> Resumé</a></button>
            </section>
            <div className="project-container">
              

                {Data.map((value) => {
                    return (
                        <section className="project-box">
                            <img src={value.thumbnail} alt="thumbnail" className="thumbnail"/>
                            <p className="title">{value.title}</p>
                            <ul className="button-container">
                                <li><a href={value.netlifyButton}  target="_blank" rel="noopener noreferrer" className='button'>Netlify</a></li>
                                <li><a href={value.githubButton}  target="_blank" rel="noopener noreferrer" className='button'>GitHub</a></li>
                            </ul>

                        </section>
                    )
                })}




            </div>
            </div>

        )


    }



export default Projects;