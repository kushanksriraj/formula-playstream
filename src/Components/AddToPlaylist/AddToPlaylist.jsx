import styles from "./AddToPlaylist.module.css";
import { useRef } from "react";
import { useUserData } from "../../hooks";
import { CreatePlaylist } from "../../Components";

export const AddToPlaylist = ({ id }) => {
  const divRef = useRef(null);
  const {
    getTotalCustomPlaylists,
    isVideoInPlaylist,
    togglePlaylist
  } = useUserData();

  const isChecked = getTotalCustomPlaylists().some((list) =>
    isVideoInPlaylist(list.id, id)
  );

  return (
    <div className={styles.wrapper}>
      <button
        className="btn-icon"
        onClick={() => {
          divRef.current.style.display = "grid";
        }}
      >
        <div
          className="icon"
          style={{ fill: isChecked ? "var(--color-3)" : "var(--color-2)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 40"
            x="0px"
            y="0px"
          >
            <path d="M26.52,3H11.67A2.48,2.48,0,0,0,9.19,5.48V20.33a2.48,2.48,0,0,0,2.48,2.48H26.52A2.48,2.48,0,0,0,29,20.33V5.48A2.48,2.48,0,0,0,26.52,3ZM24.1,13.9h-4v4a1,1,0,0,1-2,0v-4h-4a1,1,0,0,1,0-2h4v-4a1,1,0,1,1,2,0v4h4a1,1,0,0,1,0,2Z" />
            <path d="M7.19,20.33V9.19H5.48A2.48,2.48,0,0,0,3,11.67V26.52A2.48,2.48,0,0,0,5.48,29H20.33a2.48,2.48,0,0,0,2.48-2.48V24.81H11.67A4.49,4.49,0,0,1,7.19,20.33Z" />
          </svg>
        </div>
      </button>

      <div className={styles.wrapper2} ref={divRef}>
        {getTotalCustomPlaylists().map((list) => {
          return (
            <label key={list.id} htmlFor={list.id}>
              <input
                type="checkbox"
                checked={isVideoInPlaylist(list.id, id)}
                id={list.id}
                onChange={() => togglePlaylist(list.id, id)}
              />
              {list.name}
            </label>
          );
        })}
        <CreatePlaylist />
        <button onClick={() => (divRef.current.style.display = "none")}>
          Close
        </button>
      </div>
    </div>
  );
};
