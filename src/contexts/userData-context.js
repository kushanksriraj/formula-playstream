import { createContext, useReducer } from "react";
import { userDataReducer } from "../reducers";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, [
    {
      id: "LIKED",
      name: "Liked",
      videos: []
    },
    {
      id: "WATCH_LATER",
      name: "Watch later",
      videos: []
    }
  ]);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
