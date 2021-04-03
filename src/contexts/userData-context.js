import { createContext, useReducer } from "react";
import { userDataReducer } from "../reducers";
import { v4 } from "uuid";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userDataReducer, {
    liked: [],
    watchLater: [],
    playlists: [
      {
        id: "LIKED",
        name: "Liked",
        videos: [],
        isCustom: false
      },
      {
        id: "WATCH_LATER",
        name: "Watch later",
        videos: [],
        isCustom: false
      },
      {
        id: 1101,
        name: "Custom 1",
        videos: [],
        isCustom: true
      },
      {
        id: 1102,
        name: "Custom 2",
        videos: [],
        isCustom: true
      }
    ],
    isPlaylistSelected: false,
    selectedPlaylistId: null
  });
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
