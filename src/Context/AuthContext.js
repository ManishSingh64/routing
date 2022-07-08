import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  function login() {
    setState({
      ...state,
      isAuth: true,
    });
  }

  function logout() {
    setState({
      ...state,
      isAuth: false,
    });
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
