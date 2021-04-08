import styles from "./VideoThumbnail.module.css";

import { useNavigate } from "react-router-dom";

export const VideoThumbnail = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.wrapper}
      onClick={() => navigate(`/video/${video.id}`)}
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
