import React from 'react'
import { Link } from 'react-router';

const Register = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();

    }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' id='username' placeholder='Enter Your username' />
                <input type="email" name='email' id='email' placeholder='Enter Your email' />
                <input type="password" name='password' id='password' placeholder='enter your password' />
                <button className='button primery-button'>Create</button>
                <p>Already have an account ! <Link to={"/login"}>Login.</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Register