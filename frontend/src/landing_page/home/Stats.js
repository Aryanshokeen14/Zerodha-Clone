import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-4'>
                <div className='col-5 p-4'>
                    <h2 className='mb-3' style={{fontWeight:500}}>Trust with confidence</h2> <br/>
                    <h3 className='fs-5' style={{fontWeight:450}}>Customer-first always</h3>
                    <p className='text-muted fw-light mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p> 
                    <h3 className='fs-5' style={{fontWeight:450}}>No spam or gimmicks</h3>
                    <p className='text-muted fw-light mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='fs-5' style={{fontWeight:450}}>The Zerodha universe</h3>
                    <p className='text-muted fw-light mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-5' style={{fontWeight:450}}>Do better with money</h3>
                    <p className='text-muted fw-light mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 p-2 mt-2'>
                    <img src='media/images/ecosystem.png' style={{width:"95%"}}/>
                    <div className='text-center '>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''className='mx-5' style={{textDecoration:"none"}}>Try Kite demo<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;