import { useUserData } from "../../hooks";
import { PlaylistEdit } from "../../Components";
import styles from "./ManagePlaylist.module.css";

export const ManagePlaylist = ({ setRoute }) => {
  const { state } = useUserData();

  return (
    <div className={styles.wrapper} >
      <button onClick={() => setRoute("all")}>Back</button>
      {state.filter(({ id }) => id !== "LIKED" && id !== "WATCH_LATER").length >
      0
        ? state.filter(({ id }) => id !== "LIKED" && id !== "WATCH_LATER").map((list) => 
        <PlaylistEdit key={list.id} playlist={list} />)
        : "No playlists."}
    </div>
  );
};

// list all custom playlisy, give option to edit or delete -- extract this out in a component
