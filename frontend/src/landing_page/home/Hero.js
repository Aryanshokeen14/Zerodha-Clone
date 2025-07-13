import React from 'react'

const buttonStyle={
    backgroundColor: '#387ed1',
    width:"20%",
    margin:"0 auto",
    border:"1px solid",
};

function Hero() {
    return (  
        <div className='container p-5 mb-3 mt-5'>
            <br/><br/>
            <div className='row text-center col-12' style={{justifyContent:"center"}}>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' style={{width:"80%"}}/>  
                
                <h1 className='mt-4'>Invest in everything</h1>   
                <p className='mt-2 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={buttonStyle}>Sign up for free</button>   
            </div>

        </div>

    );
}

export default Hero;