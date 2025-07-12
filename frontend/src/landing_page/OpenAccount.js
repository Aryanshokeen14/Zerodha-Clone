import React from 'react'

const buttonStyle={
    backgroundColor: '#387ed1',
    width:"20%",
    margin:"0 auto",
    border:"1px solid",
};

function OpenAccount() {
    return (  
         <div className='container p-5'>
            <div className='row text-center'> 
                <h3 className='mt-4'>Open a Zerodha account</h3>   
                <p className='mt-4 mb-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={buttonStyle}>Sign up for free</button>   
            </div>

        </div>
    ); 
}

export default OpenAccount;