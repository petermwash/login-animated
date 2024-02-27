"use client";

import Image from 'next/image'
import { useState } from 'react';
import { BiLogoGooglePlus, BiLogoMeta, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

export default function Home() {

  const [isActive, setIsActive] = useState<boolean>(false)

  const onRegisterClicked = () => {
    setIsActive(true)
  }

  const onLoginClicked = () => {
    setIsActive(false)
  }
  return (
    <div className={`container ${isActive ? 'active' : ''}`} id='container'>
      <div className='form-container sign-up'>
        <form>
          <h1>Create Account</h1>
          <div className='flex social-icons' id='social-icons'>
            {[BiLogoGooglePlus, BiLogoMeta, BiLogoGithub, BiLogoLinkedin].map((Icon, index) => (
              <a key={index} href='#' >
                <Icon />
              </a>
            ))}
          </div>
          <span>or use your email for registeration</span>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>
      <div className='form-container sign-in'>
        <form>
          <h1>Sign In</h1>
          <div className='flex social-icons' id='social-icons'>
            {[BiLogoGooglePlus, BiLogoMeta, BiLogoGithub, BiLogoLinkedin].map((Icon, index) => (
              <a className='inline' key={index} href='#' >
                <Icon />
              </a>
            ))}
          </div>
          <span>or use your email and password</span>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <a href='#' >Forgot Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to proceed</p>
            <button onClick={onLoginClicked} className='hide' id='login'>Sign In</button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>Hello There!</h1>
            <p>Register with your personal details to proceed</p>
            <button onClick={onRegisterClicked} className='hide' id='register'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}
