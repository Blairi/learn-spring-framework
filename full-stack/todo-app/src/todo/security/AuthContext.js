import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  const login = (username, password) => {
    if (username === 'in28minutes' && password === '') {
      setAuthenticated(true);
      setUsername(username);
      return true;
    }
    else{
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
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