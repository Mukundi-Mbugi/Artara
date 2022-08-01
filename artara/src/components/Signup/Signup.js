import React from 'react'
import { useState } from 'react'
import "./Signup.css"
import logo from './1113-ai.png'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const handleLogin = () => {
        console.log("Login");
    }
    const handleSignup = () => {
        console.log("Signup");
    };
  return (
    <div className="sign-div">
        <form>
            <img src={logo} alt="logo" className="logo" />
            <div className="name-div">
                <label>Name</label>
                <input type="text" id="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="email-div">
                <label>Email</label>
                <input type="email" id="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="password-div">
                <label>Password</label>
                <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="confirm-password-div">
                <label>Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>
            <div className="image-div">
                <label>Image</label>
                <input type="file" id="image" placeholder="Enter image" value={image} onChange={(e)=>setImage(e.target.value)} />
            </div>
            <div className="error-div">
                <label>{error}</label>
            </div>
            {/* <div className="submit-div">
                <button type="submit">Submit</button>
            </div> */}
            <div className="class-btn">
          <div className="error_div">
            <p className="error">{error}</p>
          </div>
          {hasAccount ? (
            <div className="sign-text">
              <button onClick={handleLogin}>Sign in</button>
              <p id="sign">
                Don't have an account ?{" "}
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                  className="sign-link"
                >
                  Sign Up
                </span>
              </p>
            </div>
          ) : (
            <div className="sign-text">
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account ?{" "}
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                  className="sign-link"
                >
                  Sign in
                </span>
              </p>
            </div>
          )}
        </div>
        </form>
    </div>
  )
}

export default Signup