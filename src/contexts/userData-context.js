import { createContext, useReducer } from "react";
import { userDataReducer } from "../reducers";
export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  // add history in state
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
    },
    {
      id: "dgrdgd",
      name: "Custom 1",
      videos: []
    }
  ]);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
