import React from 'react'
import Link from 'next/dist/client/link'
import { FaGoogle, FaTwitter, FaGithub} from 'react-icons/fa' 

const signup = () => {
  return (
    <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            {/* <h5 class="modal-title">Modal title</h5> */}
            <h2 class="fw-bold mb-0">Sign Up</h2>
            <Link href="/"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
          </div>

          <div class="modal-body p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3">
                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign Up</button>
              <small class="text-muted">By clicking Sign Up, you agree to the terms of use.</small>
              <hr class="my-4"/>
                <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                  <svg class="bi me-1" width="16" height="16"><FaGoogle  /></svg>
                  Sign Up with Google
                </button>
                <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                  <svg class="bi me-1" width="16" height="16"><FaTwitter  /></svg>
                  Sign Up with Twitter
                </button>
                <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                  <svg class="bi me-1" width="16" height="16"><FaGithub /></svg>
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