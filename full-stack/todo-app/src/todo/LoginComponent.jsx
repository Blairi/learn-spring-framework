import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export const LoginComponent = () => {

  const [username, setUsername] = useState('blairi');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (username === 'blairi' && password === '') {
      authContext.setAuthenticated(true);
      console.log("success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    }
    else{
      authContext.setAuthenticated(false);
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return(
    <div className="Login">
      <h1>Time to login</h1>
      { showSuccessMessage &&  <div className='successMessage'>Authenticate Successfully</div> }
      { showErrorMessage && <div className='errorMessage'>Authenticate Failed. Please check your credentials.</div> }
      <div className="LoginForm">
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" id="username"
            value={ username }
            onChange={ handleUsernameChange }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" id="password" 
            value={ password }
            onChange={ handlePasswordChange }
          />
        </div>
        <div>
          <button 
            type="submit" name="login" 
            onClick={ handleSubmit }
          >login</button>
        </div>
      </div>
    </div>
  )
}