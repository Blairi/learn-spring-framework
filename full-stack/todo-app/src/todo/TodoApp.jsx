import { useState } from 'react';
import './TodoApp.css';

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      TodoApp
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  )
}

const LoginComponent = () => {

  const [username, setUsername] = useState('blairi');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (username === 'blairi' && password === '') {
      console.log("success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    }
    else{
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  const SuccessMessageComponent = () => {
    if(showSuccessMessage)
      return <div className='successMessage'>Authenticate Successfully</div>;
    else
      return null
  }

  const ErrorMessageComponent = () => {
    if(showErrorMessage)
      return <div className='errorMessage'>Authenticate Failed. Please check your credentials.</div>;
    else
      return null
  }

  return(
    <div className="Login">
      <SuccessMessageComponent />
      <ErrorMessageComponent />
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

const WelcomeComponent = () => {
  return(
    <div className="Welcome">
      Welcome component
    </div>
  )
}