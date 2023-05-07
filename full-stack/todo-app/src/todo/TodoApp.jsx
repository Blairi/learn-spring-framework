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

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return(
    <div className="Login">
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
          <button type="submit" name="login">login</button>
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