import { useContext } from "react";
import { UserDataContext } from "../contexts";
import { useVideoData } from "../hooks";

export const useUserData = () => {
  const { state, dispatch } = useContext(UserDataContext);

  const { videoList } = useVideoData();

  const unSelectPlaylistOnClick = () => {
    dispatch({
      type: "UNSELECT_PLAYLIST"
    });
  };

  const selectPlaylistOnClick = (id) => {
    dispatch({
      type: "SELECT_PLAYLIST",
      payload: {
        id
      }
    });
  };

  const getSelectedPlaylist = (id) => {
    return state.playlists.filter((playlist) => playlist.id === id)[0];
  };

  const isLiked = (id) => {
    return state.playlists
      .filter(({ id }) => id === "LIKED")[0]
      .videos.some((video) => video.id === id);
  };

  const toggleLiked = (id) => {
    if (!isLiked(id)) {
      const video = videoList.filter((video) => video.id === id)[0];

      dispatch({
        type: "LIKE_VIDEO",
        payload: {
          video
        }
      });
    } else {
      dispatch({
        type: "UNLIKE_VIDEO",
        payload: {
          id
        }
      });
    }
  };

  const isSaved = (id) => {
    return state.playlists
      .filter(({ id }) => id === "WATCH_LATER")[0]
      .videos.some((video) => video.id === id);
  };

  const toggleSaved = (id) => {
    if (!isSaved(id)) {
      const video = videoList.filter((video) => video.id === id)[0];

      dispatch({
        type: "SAVE_VIDEO",
        payload: {
          video
        }
      });
    } else {
      dispatch({
        type: "UNSAVE_VIDEO",
        payload: {
          id
        }
      });
    }
  };

  const editPlaylistOnClick = (id, newName) => {
    dispatch({
      type: "EDIT_PLAYLIST",
      payload: {
        id,
        newName
      }
    });
  };

  const deletePlaylistOnClick = (id) => {
    dispatch({
      type: "DELETE_PLAYLIST",
      payload: {
        id
      }
    });
  };

  const creatNewPlaylist = (name) => {
    dispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: {
        name
      }
    });
  };

  const getTotalCustomPlaylists = () => {
    return state.playlists
      .filter((list) => list.isCustom)
      .map(({ id, name }) => ({ id, name }));
  };

  const isVideoInPlaylist = (playlistId, id) => {
    return state.playlists
      .filter(({ id }) => id === playlistId)[0]
      .videos.some((video) => video.id === id);
  };

  const togglePlaylist = (playlistId, id) => {

    if (!isVideoInPlaylist(playlistId, id)) {
      const video = videoList.filter((video) => video.id === id)[0];
      dispatch({
        type: "ADD_VIDEO_TO_PLAYLIST",
        payload: {
          playlistId,
          video
        }
      });
    } else {
      dispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: {
          playlistId,
          id
        }
      });
    }
  };

  return {
    ...state,
    isVideoInPlaylist,
    togglePlaylist,
    getTotalCustomPlaylists,
    creatNewPlaylist,
    editPlaylistOnClick,
    deletePlaylistOnClick,
    isLiked,
    toggleLiked,
    isSaved,
    toggleSaved,
    selectPlaylistOnClick,
    unSelectPlaylistOnClick,
    getSelectedPlaylist
  };
};
