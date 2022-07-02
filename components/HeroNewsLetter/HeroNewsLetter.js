import React from 'react'
import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const HeroNewsLetter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { data } = useSWR('/api/subscribers', fetcher);
    const subscriberCount = data?.count;

    const subscribeMe = async (event) => {
        event.preventDefault();

        const res = await fetch("/api/subscribe", {
            body: JSON.stringify({ email: email }),
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
        });

        const { error, message } = await res.json();
        if (error) {
            setError(error);
        } else {
            setSuccess(message);
        }
    };

    const changeEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }


    return (

        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Fill this form to get subscribed for Newsletter</h1>
                    <p className="col-lg-10 fs-4">To get the latest updates, you have to get subscribed for our Newsletter. We will send you an email informing every updates. Just fill this form & you are good to go.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={subscribeMe}>
                        <div className="form-floating mb-3">
                            <input type="email" onChange={changeEmail}
                                className="form-control" id="floatingInput" required placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Subscribe</button>
                        <hr className="my-4" />
                        <small className="text-muted">By Subscribing, you agree with our terms of Service.</small>
                        <hr className="my-4" />
                        <small className="text-muted">{ subscriberCount } Subscribers</small>
                    </form>
                    <div className="overflow-hidden">
                        {success
                            ? <div className="alert alert-primary overflow-hidden" role="alert">{success}</div>
                            : <div className="alert alert-danger overflow-hidden" role="alert">{error}</div>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroNewsLetter