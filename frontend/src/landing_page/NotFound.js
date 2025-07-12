import React from 'react'
import {Link} from 'react-router-dom';

function NotFound() {
    return (  
         <div className='container p-5'>
            <div className='row text-center'> 
                <h3 className='mt-4'>404 Not Found</h3>   
                <p className='mt-4 mb-3 text-muted'>Sorry the page that you are looking for does not exist</p>
                <p>Visit <Link to='/' style={{textDecoration:"none"}}>Zerodha’s home page</Link></p>
             </div>

        </div>
    ); 
}

export default NotFound;