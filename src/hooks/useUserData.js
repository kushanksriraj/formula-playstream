import { useContext } from "react";
import { UserDataContext } from "../contexts";
import { useVideoData } from "../hooks";

export const useUserData = () => {
  const { state, dispatch } = useContext(UserDataContext);

  const { videoList } = useVideoData();

  const getVideoById = (id) => {
    return videoList.find((video) => video.id === id);
  };

  const getSelectedPlaylist = (id) => {
    return state.find((playlist) => playlist.id === id);
  };

  const isLiked = (id) => {
    return state
      .find(({ id }) => id === "LIKED")
      .videos.some((video) => video.id === id);
  };

  const toggleLiked = (id) => {
    if (!isLiked(id)) {
      const video = videoList.find((video) => video.id === id);

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
    return state
      .find(({ id }) => id === "WATCH_LATER")
      .videos.some((video) => video.id === id);
  };

  const toggleSaved = (id) => {
    if (!isSaved(id)) {
      const video = videoList.find((video) => video.id === id);

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
    return state
      .filter((list) => list.id !== "LIKED" && list.id !== "WATCH_LATER")
      .map(({ id, name }) => ({ id, name }));
  };

  const isVideoInPlaylist = (playlistId, id) => {
    return state
    .find((list) => list.id === playlistId)
      .videos.some((video) => video.id === id);
  };

  const togglePlaylist = (playlistId, id) => {
    if (isVideoInPlaylist(playlistId, id)) {
      dispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: {
          playlistId,
          id
        }
      });
    } else {
      const video = videoList.filter((video) => video.id === id)[0];
      dispatch({
        type: "ADD_VIDEO_TO_PLAYLIST",
        payload: {
          playlistId,
          video
        }
      });
    }
  };

  return {
    state,
    getVideoById,
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
    getSelectedPlaylist
  };
};
