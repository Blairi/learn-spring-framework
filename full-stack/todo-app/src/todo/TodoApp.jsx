
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
  return(
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
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