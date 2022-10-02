import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) =>(error.message));

    };
  return (
    <div className='login'>

        <div className="login__logo">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6Y1g_IO3u8vrXM3V-tKmOUR42Jzw5vCvmI82C5E3FMvPGzKVp-4215K39lhLG-7e0mU&usqp=CAU' alt='' />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;