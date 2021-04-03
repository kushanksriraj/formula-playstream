import styles from "./AllPlaylist.module.css";
import { Playlist } from "./Playlist";
import { useUserData } from "../../hooks";
import { CreatePlaylist } from "../../Components";

export const AllPlaylist = ({ setRoute }) => {
  const {
    playlists,
    isPlaylistSelected,
    selectPlaylistOnClick
  } = useUserData();

  return (
    <>
      {isPlaylistSelected ? (
        <Playlist />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.title}>Library</div>
          <div className={styles.defaultPlaylistWrapper}>
            <div onClick={() => selectPlaylistOnClick("LIKED")}>Liked </div>
            <div onClick={() => selectPlaylistOnClick("WATCH_LATER")}>
              Watch later
            </div>
          </div>
          <div className={styles.customPlaylistWrapper}>
            <div className={styles.separator} />
            <div className={styles.subtitle}>Your playlists</div>
            <button onClick={() => setRoute("manage")}>Manage playlists</button>
            {playlists
              .filter(({ isCustom }) => isCustom)
              .map((playlist) => (
                <div
                  key={playlist.id}
                  onClick={() => selectPlaylistOnClick(playlist.id)}
                >
                  {playlist.name}
                </div>
              ))}
            <CreatePlaylist />
          </div>
        </div>
      )}
    </>
  );
};
