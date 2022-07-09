import React from 'react'
import { useState } from 'react'
import Link from 'next/dist/client/link'
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa'
import mongoose from 'mongoose'
import connectDb from '../middleware/mongoose'

  return  (
    <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            {/* <h5 className="modal-title">Modal title</h5> */}
            <h2 className="fw-bold mb-0">Sign Up</h2>
            <Link href="/"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
          </div>

          <div className="modal-body p-5 pt-0">
            <form  method="POST" className="">
              <div className="form-floating mb-3">
                <input type="name" name="name" className="form-control rounded-3" id="name" placeholder="John Doe" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="email" name='email' placeholder="name@example.com"/>
                  <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input  type="password" className="form-control rounded-3" id="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign Up</button>
              <small className="text-muted">By clicking Sign Up, you agree to the terms of use.</small>
              <hr className="my-4" />
              <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"><FaGoogle /></svg>
                Sign Up with Google
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"><FaTwitter /></svg>
                Sign Up with Twitter
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"><FaGithub /></svg>
                Sign Up with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )


export default signup