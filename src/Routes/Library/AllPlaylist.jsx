import styles from "./AllPlaylist.module.css";
import { useUserData } from "../../hooks";
import { CreatePlaylist } from "../../Components";
import { useNavigate } from "react-router-dom";

export const AllPlaylist = ({ setRoute }) => {
  const { state } = useUserData();
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Your library</div>
      <div className={styles.separator} />
      <div className={styles.defaultPlaylistWrapper}>
        <div
          className={styles.playListName}
          onClick={() => navigate("/play-list/LIKED")}
        >
          Liked
        </div>
        <div
          className={styles.playListName}
          onClick={() => navigate("/play-list/WATCH_LATER")}
        >
          Watch later
        </div>
      </div>
      <div className={styles.customPlaylistWrapper}>
        <div className={styles.subtitle}>
          <div> Your playlists</div>
          <button
            className={styles.manageBtn}
            onClick={() => setRoute("manage")}
          >
            Manage
          </button>
          <div className={styles.createBtn}>
            <CreatePlaylist />
          </div>
        </div>
        <div className={styles.separator} />
        {state
          .filter((list) => list.id !== "LIKED" && list.id !== "WATCH_LATER")
          .map((playlist) => (
            <div
              key={playlist.id}
              className={styles.playListName}
              onClick={() => navigate(`/play-list/${playlist.id}`)}
            >
              {playlist.name}
            </div>
          ))}
      </div>
    </div>
  );
};
