import { createContext, useReducer } from "react";
import { controlReducer } from "../reducers";

export const ControlContext = createContext();

export const ControlProvider = ({ children }) => {
  const [state, dispatch] = useReducer(controlReducer, {
    route: "home",
    isVideoSelected: false,
    selectedVideoId: null
  });

  return (
    <ControlContext.Provider value={{ state, dispatch }}>
      {children}
    </ControlContext.Provider>
  );
};
