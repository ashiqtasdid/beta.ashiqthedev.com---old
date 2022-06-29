import React from 'react'
import styles from '../../styles/navbar.module.css'
// import 'bootstrap/js/dist/dropdown';
import { useEffect } from 'react'
import Image from 'next/dist/client/image'
import navLogo from '../../assets/images/atd.jpg'
import './navbar.module'
// import './navbar.module.bootstrap'
import Link from 'next/dist/client/link'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{ position: 'fixed', top: 0, width: '100%' }} id='navbar'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src={navLogo} alt="navLogo" width={35} height={35} className='d-inline-block align-text-top'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link href="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Software Development</a></li>
                                    <li><a className="dropdown-item" href="#">Web Development</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">SEO</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link" href="#">Contact Us</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link" href="#">About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link" href="#">Team</a></Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Legal
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
                                    <li><hr className= "dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Terms & Coniditions</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar