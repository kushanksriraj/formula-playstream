import { useContext } from "react";
import { VideoDataContext } from "../contexts";

export const useVideoData = () => {
  return useContext(VideoDataContext);
};
