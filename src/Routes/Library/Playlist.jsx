import { useUserData } from "../../hooks";
import { MainSection } from "../../Components";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  const { getSelectedPlaylist } = useUserData();
  const navigate = useNavigate();
  const { playListId } = useParams();

  const playlist = getSelectedPlaylist(playListId);

  if (playlist.videos.length) {
    return (
      <div>
        <MainSection
          route={playlist.name}
          videoList={playlist.videos}
          inLibrary={"inLibrary"}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper} >
        <button onClick={() => navigate(-1)}>Back to library</button>
        <div className={styles.emptyPrompt} >
        Add some videos here.
        </div>
      </div>
    );
  }
};
