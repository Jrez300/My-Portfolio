import React from 'react'
import Data from '../JSON/projects.json'


function Projects() {
    
        return(
           
            <div className= "Home">
             
            <div className="project-container2">
              

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