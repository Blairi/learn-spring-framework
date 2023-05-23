import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  // const login = (username, password) => {
  //   if (username === 'in28minutes' && password === '') {
  //     setAuthenticated(true);
  //     setUsername(username);
  //     return true;
  //   }
  //   else{
  //     setAuthenticated(false);
  //     setUsername(null);
  //     return false;
  //   }
  // }

  const login = (username, password) => {

    const baToken = 'Basic ' + window.btoa(username + ':' + password);

    executeBasicAuthenticationService(baToken)
    .then(response => console.log(response))
    .catch(error => console.log(error));

    setAuthenticated(false);

    // if (username === 'in28minutes' && password === '') {
    //   setAuthenticated(true);
    //   setUsername(username);
    //   return true;
    // }
    // else{
    //   setAuthenticated(false);
    //   setUsername(null);
    //   return false;
    // }
  }

  const logout = () => {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      { children }
    </AuthContext.Provider>
  );
}