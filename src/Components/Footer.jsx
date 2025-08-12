import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <div style={{backgroundColor:"#50366dff", color:"white"}} className="container-fluid    p-1">
        <div class="row p-2">
          <div class="col-lg-3 col-md-3  mt-md-1">
            <h5>UsedHub</h5>
            <p>We believe in reusing items. UsedHub help you to find the items you require from our bag.</p>
          </div>
          <div className="col-lg-3 col-md-3">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li>Careers</li>
              <li>Blog</li>
              <li>Partner with us </li>
              <li>Terms and condition</li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-6  mt-md-1">
            <h5>Connect with us on</h5>
            <div class="d-flex mt-4 ">
              <FaFacebook className='fs-2 me-3 ' />
              <FaInstagram className='fs-2 me-3' />
              <FaSquareXTwitter className='fs-2 me-3' />
              <FaLinkedin className='fs-2' />
            </div>

          </div>

          <div class="col-lg-3 col-md-1 mt-md-1">
            <h5>Newsletter</h5>
            <p class="text-justify">Subscribe to get notified about new arrivals and special offers.</p>
            <input type="email" value="E-mail" />
            <button style={{backgroundColor:"#cde2dbff"}} class="border rounded text-dark">Subscribe</button>
          </div>


        </div>
        <p class="text-lg-center mt-3">©Copyright at UsedHub 2025. All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer