import styles from "./MainSection.module.css";
import { VideoThumbnail } from "../";
import { useNavigate } from "react-router-dom";

export const MainSection = ({ route, videoList, inLibrary }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.mainSection}>
      {inLibrary === "inLibrary" && (
        <button onClick={() => navigate(-1)}>Back to library</button>
      )}

      <div className={styles.title}>{route}</div>
      <div className={styles.videoListWrapper}>
        {videoList.map((video) => (
          <VideoThumbnail key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};
