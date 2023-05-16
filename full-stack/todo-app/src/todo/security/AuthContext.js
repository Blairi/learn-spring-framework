import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'blairi' && password === '') {
      setAuthenticated(true);
      return true;
    }
    else{
      setAuthenticated(false);
      return false;
    }
  }

  const logout = () => {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
}