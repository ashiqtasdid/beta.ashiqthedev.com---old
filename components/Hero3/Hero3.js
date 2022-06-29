import React from 'react'
import { BsServer, BsCpuFill, BsTools} from 'react-icons/bs' 

const Hero3 = () => {
    return (
        <div>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">The features you will get</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em"><BsServer  /></svg>
                        </div>
                        <div>
                            <h2>Server Deployment</h2>
                            <p>We will deploy your server for free. And we'll also provide system for automatic server deployment. Our support will be available to you at any time</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em"><BsCpuFill/></svg>
                        </div>
                        <div>
                            <h2>Fast & Server side workspace</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em"><BsTools /></svg>
                        </div>
                        <div>
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>
        </div>
    )
}

export default Hero3