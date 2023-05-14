import './TodoApp.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeaderComponent } from './HeaderComponent';
import { LoginComponent } from './LoginComponent';
import { WelcomeComponent } from './WelcomeComponent';
import { ListTodosComponent } from './ListTodosComponent';
import { LogoutComponent } from './LogoutComponent';
import { ErrorComponent } from './ErrorComponent';

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
    </div>
  )
}


