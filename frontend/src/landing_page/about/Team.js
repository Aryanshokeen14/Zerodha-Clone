import React from 'react'

function Team() {
    return ( 
        <div className='container text-center mb-5'>
            <div className='row mb-5'>
                <h1 className='text-center'>People</h1>
            </div>
            <div className='row text-center'>
                <div className='left col-6 text-center mt-3'>
                    <img src='media/images/shokeenPic.jpeg' alt="aryan shokeen pic" style={{borderRadius:"50%" , width:"50%"}}/><br/><br/>
                    <h5 style={{fontWeight:"400" , fontSize:"1.25rem"}}>Aryan Shokeen</h5>
                    <p style={{color:'#666'}}>Engineering Student</p>
                </div>
                <div className='right col-6 text-start mt-5'>
                    <p className=''>Hi, I'm Aryan Shokeen — a passionate web developer and B.Tech student at Delhi Technological University. I specialize in building modern, responsive web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong foundation in front-end and back-end technologies, I love turning ideas into full-fledged digital products. I'm currently focused on personal projects, learning new tools, and sharpening my skills as a full-stack developer.</p>
                    <p>Playing chess is my zen.</p>
                    <p>Connect on <a href="https://www.linkedin.com/in/aryan-shokeen-529316265/" style={{ textDecoration: "none" ,color:"#387ed1",fontWeight:"500"}}>Linkedin
            </a> / <a href="https://www.instagram.com/shokeen_aryan_14/" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>Instagram
            </a> / <a href="https://x.com/aryan10013" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>Twitter
            </a></p>
                </div>
            </div>

        </div>
     );
}

export default Team;