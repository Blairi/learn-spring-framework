import { useState } from 'react';
import './TodoApp.css';
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={ <LoginComponent /> }></Route>
          <Route path='/login' element={ <LoginComponent /> }></Route>
          <Route path='/welcome/:username' element={ <WelcomeComponent /> }></Route>
          <Route path='/todos' element={ <ListTodosComponent /> }></Route>
          <Route path='/logout' element={ <LogoutComponent /> }></Route>
          <Route path='/*' element={ <ErrorComponent /> }></Route>

        </Routes>
      </BrowserRouter>
      <FooterComponent />
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
      <h1>Welcome { username }</h1>
      <div>
        Manage your todos - <Link to='/todos'>Go here</Link>
      </div>
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

const ListTodosComponent = () => {

  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

  const todos = [
    {id:1, description: 'Learn AWS', done: false, targeDate: targetDate},
    {id:2, description: 'Learn DevOps', done: false, targeDate: targetDate},
    {id:3, description: 'Learn Full Stack', done: false, targeDate: targetDate},
  ]

  return(
    <div className="container">
      <h1>Things You Want To Do!</h1>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo, i) => (
                <tr key={i}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targeDate.toDateString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const HeaderComponent = () => {
  return(
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
  )
}

const FooterComponent = () => {
  return(
    <div className="FooterComponent">
      <div className='container'>
        Your Footer
      </div>
    </div>
  )
}

const LogoutComponent = () => {
  return(
    <div className="LogoutComponent">
      <h1>You are logged out!</h1>
      <div>
        Thank you for using the app. Come backk soon!
      </div>
    </div>
  )
}