import React from 'react'

const HeroNewsLetter = () => {
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Fill this form to sign up for Newsletter</h1>
                    <p className="col-lg-10 fs-4">To get the latest updates, you have to sign up for our Newsletter. We will send you an email informing every updates. Just fill this form & you are good to go</p>
                </div>
                <div className='col-md-10 mx-auto col-lg-5' id="revue-embed">
                    <form action="https://www.getrevue.co/profile/AshiqTheDev/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank" className='p-4 p-md-5 border rounded-3 bg-light'>
                        <div className="form-floating mb-3">
                            <input className="form-control" placeholder="name@example.com" type="email" name="member[email]" id="member_email" />
                            <label for="member_email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name" />
                            <label for="member_first_name">First name <span className="optional">(Optional)</span></label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name" />
                            <label for="member_last_name">Last name <span classNameName="optional">(Optional)</span></label>
                        </div>

                        <input className='w-100 btn btn-lg btn-primary' type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
                        <hr className="my-4" />
                        <div className="text-muted">By subscribing, you agree with Ours & Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeroNewsLetter