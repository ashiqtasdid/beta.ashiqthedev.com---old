import React from 'react'
import Image from 'next/image'
import styles from '../../styles/hero.module.css'
import heroImage from '../../assets/images/imagesc.png'

const Hero = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className='display-4 fw-bold'>Ashiq The Dev</h1>
            <div className='col-lg-6 mx-auto'>
                <p className='lead mb-4'>
                    Ashiq The Dev - Developing That Matters is an IT consultant company. We provide various kinds of IT services including Web & Software Development, SEO, Management & Much more. Click on the button below to check it out.
                </p>
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
                    <button type='button' className='btn btn-primary btn-lg px-4 me-sm-3'>Services</button>
                    <button type='button' className='btn btn-outline-secondary btn-lg-px-4'>Get A Quote</button>
                </div>
            </div>
            <div className={styles.screenimage}>
                <div className='container px-5'>
                    <Image src={heroImage} className='img-fluid border rounded-3 shadow-lg mb-4 heroImage' alt='heroImage' loading='lazy'/>                   
                </div>
            </div>
        </div>
    )
}

export default Hero