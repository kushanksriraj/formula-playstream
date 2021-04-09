import styles from "./VideoThumbnail.module.css";
import { useUserData } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const VideoThumbnail = ({ video }) => {
  const navigate = useNavigate();
  const { addToHistoryOnClick, isInHistory } = useUserData();

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        navigate(`/video/${video.id}`);
        !isInHistory(video.id) && addToHistoryOnClick(video.id);
      }}
    >
      <div className={styles.imgContainer}>
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt=""
        />
      </div>
      <div className={styles.name}>{video.name}</div>
    </div>
  );
};
