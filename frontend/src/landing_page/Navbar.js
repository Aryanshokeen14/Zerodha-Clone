import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
        <div className='contain d-flex p-2 mt-2' style={{borderBottom:"2px solid rgb(246, 245, 245)"}}>
            <div className='row col-12 mt-2 text-center'>
                <div className='col-1'></div>
            <div className='logo col-3'>
                <Link to="/"><img src='media/images/logo.svg' style={{width:"44%" , cursor: "pointer"}}></img></Link>
            </div>
            <div className='col-2'></div>
            <div className='linkComponents d-flex col-6 text-center ' style={{justifyContent:"flex-end"}}>
                <p><Link className='Navlink me-4' to="/">Signup</Link></p>
                <p><Link className='Navlink ms-4 me-3' to="/about">About</Link></p>
                <p><Link className='Navlink ms-4 me-3' to="/products">Products</Link></p>
                <p><Link className='Navlink ms-4 me-3' to="/pricing">Pricing</Link></p>
                <p><Link className='Navlink ms-4 me-3' to="/support">Support</Link></p>
                <i className="fa fa-bars fs-4 fw-lighter ms-5 me-5" aria-hidden="true" ></i>
            </div>
            </div>
        
        </div>
    );
}

export default Navbar;