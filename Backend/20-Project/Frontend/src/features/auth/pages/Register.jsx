import React, { useState } from 'react'
import { Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const Register = () => {

    const {loading, handleRegister } = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await handleRegister(username, email, password)

        navigate("/feed")
        
    }

    if(loading){
        return (<main>
            <h1>Loading...</h1>
        </main>)
    }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                 onInput={(e) => {setUsername(e.target.value)}}
                 type="text" 
                 name='username' 
                 id='username' 
                 placeholder='Enter Your username' />
                <input
                 onInput={(e) => {setEmail(e.target.value)}}
                 type="email" 
                 name='email' 
                 id='email' 
                 placeholder='Enter Your email' />
                <input
                 onInput={(e) => {setPassword(e.target.value)}}
                 type="password" 
                 name='password' 
                 id='password' placeholder='enter your password' />
                <button className='button primery-button'>Create</button>
                <p>Already have an account ! <Link to={"/login"}>Login.</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Register