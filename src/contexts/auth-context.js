import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
