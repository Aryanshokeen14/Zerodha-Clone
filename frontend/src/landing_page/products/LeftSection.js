import React from 'react'
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
    <div className='container' style={{padding:"80px 0 0 0"}}>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-6'>
                <img src={imageURL}/>
            </div>
            <div className='col-4 text-start mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href="" style={{textDecoration:"none",color:"#387ed1",fontWeight:"500", marginRight:"70px"}}>{tryDemo}</a>
                <a href="" style={{textDecoration:"none",color:"#387ed1",fontWeight:"500"}}>{learnMore}</a>
                </div>
                <div className='mt-4'>
                    <a href={googlePlay} style={{marginRight:"30px"}}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore}><img src='media/images/appstoreBadge.svg'/></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LeftSection;