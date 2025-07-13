import React from 'react'

function Team() {
    return ( 
        <div className='container text-center mb-5'>
            <div className='row mb-5'>
                <h1 className='text-center'>People</h1>
            </div>
            <div className='row text-center'>
                <div className='left col-6 text-center mt-3'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"50%" , width:"50%"}}/><br/><br/>
                    <h5 style={{fontWeight:"400" , fontSize:"1.25rem"}}>Nithin Kamath</h5>
                    <p style={{color:'#666'}}>Founder, CEO</p>
                </div>
                <div className='right col-6 text-start mt-5'>
                    <p className=''>Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/> hurdles he faced during his decade long stint as a trader. Today,<br/> Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee<br/> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="https://nithinkamath.me" style={{ textDecoration: "none" ,color:"#387ed1",fontWeight:"500"}}>Homepage
            </a> / <a href="https://tradingqna.com/u/nithin/summary" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>TradingQnA
            </a> / <a href="/" style={{ textDecoration: "none",color:"#387ed1",fontWeight:"500" }}>Twitter
            </a></p>
                </div>
            </div>

        </div>
     );
}

export default Team;