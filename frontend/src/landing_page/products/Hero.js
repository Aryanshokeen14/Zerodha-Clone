import React from 'react'
function Hero() {
    return ( 
      <div className='container' style={{paddingTop:"100px",paddingBottom:"100px",borderBottom:"1px solid #eee"}}>
        <br/><br/><br/>
        <h1 style={{fontWeight:"500",color:"#424242",fontSize:"2.75rem",textAlign:"center"}}>Zerodha Products</h1>
        <p style={{fontSize:"1.25rem", fontWeight:"400",color:"#424242",textAlign:"center"}}>Sleek, modern, and intuitive trading platforms</p>
        <p style={{textAlign:"center",color:"#424242"}}>Check out our <a href='' style={{textDecoration:"none",color:"#387ed1",fontWeight:"500"}}>investment offerings→</a></p>
        
      </div>
    );
}

export default Hero;