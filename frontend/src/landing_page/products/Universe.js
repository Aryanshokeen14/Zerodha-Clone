import React from 'react'

function Universe() {
    return ( 
        <div className='container p-5 mt-5'>
            <br/>
                <div className='row'>
                    <h2 className="text-center" style={{fontWeight:"500", color:"#424242", lineHeight:"1.5rem", fontSize:"2rem"}}>The Zerodha Universe</h2>
                <p className="text-center mb-5 mt-4" style={{color:"#424242"}}>Extend your trading and investment experience even further with our partner platforms</p>
            
                </div>
                <div className='row mb-5'>
                <div className='col-4'>
                    <a href='https://www.zerodhafundhouse.com' style={{textDecoration:"none", fontWeight:"500",color:"#424242",display:"block",textAlign:"center"}}><img src='media/images/zerodhaFundhouse.png' alt="zerodhaFundHouse logo" style={{width:"50%"}}/><br/><br/>
                    <span style={{display:"block" , color:"#9b9b9b", textAlign:"center"}}>
                        Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </span></a>
                    <br/><br/>

                    <a href='https://www.streak.tech/home' style={{textDecoration:"none", fontWeight:"500",color:"#424242",display:"block",textAlign:"center"}}><img src='media/images/streakLogo.png' alt="streak logo" style={{width:"50%"}}/><br/><br/>
                    <span style={{display:"block" , color:"#9b9b9b", textAlign:"center"}}>
                        Systematic trading platform<br/>
                        that allows you to create and backtest<br/>
                        strategies without coding.
                        </span></a>    
                </div>
                <div className='col-4 mb-5'>
                    <a href='https://sensibull.com' style={{textDecoration:"none", fontWeight:"500",color:"#424242",display:"block",textAlign:"center"}}><img src='media/images/sensibullLogo.svg' alt="sensibull logo" style={{width:"50%"}}/><br/><br/>
                    <span style={{display:"block" , color:"#9b9b9b", textAlign:"center", marginTop:"20px" , marginBottom:"20px"}}>
                        Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </span></a>
                    <br/><br/>

                    <a href='https://smallcase.zerodha.com' style={{textDecoration:"none", fontWeight:"500",color:"#424242",display:"block",textAlign:"center"}}><img src='media/images/smallcaseLogo.png' alt="smallcase logo" style={{width:"50%"}}/><br/><br/>
                    <span style={{display:"block" , color:"#9b9b9b", textAlign:"center"}}>
                        Systematic trading platform<br/>
                        that allows you to create and backtest<br/>
                        strategies without coding.
                        </span></a>    
                </div>
                
                <div className='col-4'>
                    <a href='https://www.tijorifinance.com/ideas-dashboard/' style={{textDecoration:"none", fontWeight:"500",color:"#424242",display:"block",textAlign:"center"}}><img src='media/images/tijoriLogo.svg' alt="tijori logo" style={{width:"40%"}}/><br/><br/>
                    <span style={{display:"block" , color:"#9b9b9b", textAlign:"center"}}>
                        Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.
                        </span></a>
                    <br/><br/>

                    <a href='https://joinditto.in' style={{textDecoration:"none", fontWeight:"500",color:"#424242",display:"block",textAlign:"center" ,marginTop:""}}><img src='media/images/dittoLogo.png' alt="ditto logo" style={{width:"40%"}}/><br/><br/>
                    <span style={{display:"block" , color:"#9b9b9b", textAlign:"center"}}>
                        Systematic trading platform<br/>
                        that allows you to create and backtest<br/>
                        strategies without coding.
                        </span></a>    
                </div>

                
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{backgroundColor: '#387ed1',
    width:"20%",
    margin:"0 auto",
    border:"1px solid",}}>Sign up for free</button> 
                
            </div>
        </div>
     );
}

export default Universe;