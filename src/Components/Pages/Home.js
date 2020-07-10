import React from 'react'
import Navbar from '../NavBar/navbar'
import Projects from '../Content/projects'
import Footer from '../Footer/footer'


function Home(){

        return(

            <div className="Home">
            <Navbar/>
            <Projects/>
            <Footer/>
           </div>



        )

}

export default Home