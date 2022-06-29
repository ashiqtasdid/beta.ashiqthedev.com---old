import React from 'react'
import Link from 'next/dist/client/link'
import { FaGoogle, FaTwitter, FaGithub} from 'react-icons/fa' 

const signup = () => {
  return (
    <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            {/* <h5 className="modal-title">Modal title</h5> */}
            <h2 className="fw-bold mb-0">Sign Up</h2>
            <Link href="/"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign Up</button>
              <small className="text-muted">By clicking Sign Up, you agree to the terms of use.</small>
              <hr className="my-4"/>
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                  <svg class="bi me-1" width="16" height="16"><FaGoogle  /></svg>
                  Sign Up with Google
                </button>
                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                  <svg className="bi me-1" width="16" height="16"><FaTwitter  /></svg>
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
}

export default signup