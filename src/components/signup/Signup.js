import React from 'react'
import "./signup.css"
const Signup = () => {
  return (
      <div className='signup'>
          <div className='text'>Sign up and get exclusive special deals</div>
          <div className='input'>
              <input type='text' placeholder='Enter E-mail Id' ></input>
              <button>SignUp</button>
          </div>
    </div>
  )
}

export default Signup