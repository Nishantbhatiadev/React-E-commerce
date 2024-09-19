import React from 'react'
import logo from "../assets/logo.avif"
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav id='main-nav-container'>
                <div id='sub-nav-container'>
                    <div id='nav-content'>
                        <ul id='nav-left'>
                            <li className='list'>
                                <img src={logo} alt="logo1" id='logo' />
                            </li>
                            <li className='list'>
                                <Link to='/' className='links'>Home</Link>
                            </li>
                            <li className='list'>
                                <Link to='/product' className='links'>Product</Link>
                            </li>
                            <li className='list'>
                                <Link to='/blog' className='links'>Blogs</Link>
                            </li>
                            <li className='list'>
                                <Link to='/contact' className='links'>Contact us</Link>
                            </li>
                        </ul>

                        <div id='nav-right'>
                            <MDBBtn className='mx-2' color='dark'>
                                Register
                            </MDBBtn>
                            <MDBBtn className='mx-2' color='dark'>
                                Login
                            </MDBBtn>
                            <MDBBtn className='mx-2'color='dark'>
                                <Link to="/Cart" id='btn-text' >Cart</Link>
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;