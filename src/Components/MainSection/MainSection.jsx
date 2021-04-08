import styles from "./MainSection.module.css";
import { useUserData } from "../../hooks";
import { VideoThumbnail, VideoPage } from "../";

export const MainSection = ({ route, videoList, inLibrary }) => {
  const { unSelectPlaylistOnClick } = useUserData();

  return (
    <>
      <section className={styles.mainSection}>
        {inLibrary === "inLibrary" && (
          <button onClick={unSelectPlaylistOnClick}>Back to library</button>
        )}

        <div className={styles.title}>{route} videos</div>
        <div className={styles.videoListWrapper}>
          {videoList.map((video) => (
            <VideoThumbnail key={video.id} video={video} />
          ))}
        </div>
      </section>
    
    </>
  );
};
