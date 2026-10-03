import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import "../style/form.scss"

const Login = () => {

    const {user, loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e)=> {
        e.preventDefault();

        await handleLogin(username, password)

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
                 onInput={(e)=> {setUsername(e.target.value)}}
                 type="text" 
                 name='username' 
                 id='username' 
                 placeholder='Enter Your username' />
                <input
                 onInput={(e)=> {setPassword(e.target.value)}}
                 type="password" 
                 name='password' 
                 id='password' 
                 placeholder='enter your password' />
                <button className='button primery-button'>Login</button>
                <p>Don't have an account ? <Link to={"/register"}>Create One.</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login