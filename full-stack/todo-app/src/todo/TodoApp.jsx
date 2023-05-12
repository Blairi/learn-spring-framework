import { useState } from 'react';
import './TodoApp.css';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LoginComponent /> }></Route>
          <Route path='/login' element={ <LoginComponent /> }></Route>
          <Route path='/welcome/:username' element={ <WelcomeComponent /> }></Route>
          <Route path='/*' element={ <ErrorComponent /> }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

const LoginComponent = () => {

  const [username, setUsername] = useState('blairi');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

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
      navigate(`/welcome/${username}`);
    }
    else{
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

const WelcomeComponent = () => {

  const { username } = useParams();

  return(
    <div className="Welcome">
      Welcome { username }
    </div>
  )
}

const ErrorComponent = () => {
  return(
    <div className="ErrorComponent">
      <h1>We are working really hard</h1>
      <div>
        Apologies for the 404. 
      </div>
    </div>
  )
}