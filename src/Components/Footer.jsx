import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Fa42Group } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-r from-black to-slate-950  p-12 text-white">

        <div>
        <aside className='flex flex-col gap-1'>
     <Fa42Group className='md:text-6xl text-4xl'></Fa42Group>
    <p className='text-xl '>
      <span className='text-3xl font-bold py-5'>Digital IT Ltd.</span>
      <br />
      Your Digital Solution
    </p>
  </aside>
        </div>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>

  <form>
    <h6 className="footer-title">Digital Connection</h6>
    <fieldset className="form-control ">
      <label className="label">
        <span className="text-white">Subscribe Us</span>
      </label>
      <div className="join border-0">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-green-500 text-green-950 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  <nav >
    <h6 className="footer-title">Contact US!</h6>
     <div className='flex gap-2 md:gap-4 text-2xl'>
     <a className="link link-hover"><FaFacebook></FaFacebook></a>
    <a className="link link-hover"><FaGithub></FaGithub></a>
    <a className="link link-hover"><SiGmail></SiGmail></a>
    <a className="link link-hover"><FaLinkedin></FaLinkedin></a>
     </div>
  </nav>

</footer>
    </div>
  )
}

export default Footer