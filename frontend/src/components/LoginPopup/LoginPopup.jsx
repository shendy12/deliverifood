import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-input">
          {currState === "Sign Up" && <input type="text" placeholder='Namamu' required />}
          <input type="email" placeholder='Email mu' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Buat akun" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Centang di sini untuk menyetejui persyaratan dan melanjutkan</p>
        </div>
        {currState === "Login" ? (
          <p>Buat akun baru? <span onClick={() => setCurrState("Sign Up")}>Klik di sini</span></p>
        ) : (
          <p>Sudah memiliki akun? <span onClick={() => setCurrState("Login")}>Login di sini</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
