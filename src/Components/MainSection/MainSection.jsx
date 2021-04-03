import styles from "./MainSection.module.css";
import { useControl, useUserData } from "../../hooks";
import { VideoThumbnail, VideoPage } from "../";

export const MainSection = ({ route, videoList, inLibrary }) => {
  const { isVideoSelected } = useControl();
  const { unSelectPlaylistOnClick } = useUserData();

  return (
    <>
      {isVideoSelected ? (
        <VideoPage videoList={videoList} />
      ) : (
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
      )}
    </>
  );
};
