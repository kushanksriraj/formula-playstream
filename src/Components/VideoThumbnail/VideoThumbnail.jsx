import styles from "./VideoThumbnail.module.css";
import { useControl } from "../../hooks";

export const VideoThumbnail = ({ video }) => {
  const { selectVideoOnClick } = useControl();

  console.log(video);

  return (
    <div
      className={styles.wrapper}
      onClick={() => selectVideoOnClick(video.id)}
    >
      <div className={styles.imgContainer}>
        <img
          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
          alt=""
        />
      </div>
      <div className={styles.name}>{video.name}</div>
    </div>
  );
};
