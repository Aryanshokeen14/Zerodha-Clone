import React from 'react'
function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className='container' style={{padding:"80px 0 0 0"}}>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-5' style={{marginTop:"180px"}}>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <a href="/" style={{textDecoration:"none",color:"#387ed1",fontWeight:"500"}}>{learnMore}</a>
            </div>
            <div className='col-6'>
                <img src={imageURL}/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;