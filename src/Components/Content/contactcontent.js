import React from 'react'
import Form from '../Content/form'

function Contactcontent() {
    
        return(
           
            <div className="contact-container">
                <img src={require('../../img/linkedinprofile.jpeg')} alt='me' className="profilePic"/>
                <Form />
            </div>
        )


    }



export default Contactcontent;