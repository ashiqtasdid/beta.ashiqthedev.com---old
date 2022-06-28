import React from 'react'
import heroImage from '../../assets/images/pc_code.jpg'
import Image from 'next/image'

const Hero2 = () => {
    return (
        <div className='container col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='col-10 col-sm-8 col-lg-6'>
                    <Image src={heroImage} className='d-block mx-lg-auto img-fluid' alt='HeroImage' width={700} height={500} loading='lazy' />
                </div>
                <div className='col-lg-6'>
                    <h1 className='display-5 fw-bold lh-1 mb-3'>The Services We Provide</h1>
                    <p className='lead'>
                        We provide various kinds of IT services. Among them, the most popular ones are Web Development, SEO & Software Development. We have a great development team who will do the work according your choice.
                    </p>
                    <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                        <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>Web & Software</button>
                        <button type='button' className='btn btn-outline-secondary btn-lg px-4'>SEO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2