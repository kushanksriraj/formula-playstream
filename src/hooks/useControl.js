import { useContext } from "react";
import { ControlContext } from "../contexts";
import { useUserData } from "./";

export const useControl = () => {
  const { state, dispatch } = useContext(ControlContext);
  const { unSelectPlaylistOnClick } = useUserData();
  
  const selectVideoOnClick = (id) => {
    dispatch({
      type: "SELECT_VIDEO",
      payload: {
        id
      }
    });
  };

  const unselectVideoOnClick = () => {
    dispatch({
      type: "UNSELECT_VIDEO"
    });
  };

  const getSelectedVideo = (videoList,id) => {
    return videoList.filter((video) => video.id === id)[0];
  };

  const changeRouteOnClick = (route) => {
    unSelectPlaylistOnClick();
    dispatch({
      type: "CHANGE_ROUTE",
      payload: { route }
    });
  };

  return {
    ...state,
    changeRouteOnClick,
    selectVideoOnClick,
    unselectVideoOnClick,
    getSelectedVideo,
    dispatch
  };
};
