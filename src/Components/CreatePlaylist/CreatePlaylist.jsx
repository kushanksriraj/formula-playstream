import styles from "./CreatePlaylist.module.css";
import { useRef, useState } from "react";
import { useUserData } from "../../hooks";

export const CreatePlaylist = () => {
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const { creatNewPlaylist } = useUserData();

  return (
    <div>
      <button
        onClick={() => {
          divRef.current.style.display = "block";
          inputRef.current.focus();
        }}
      >
        Create new playlist
      </button>

      <div ref={divRef} className={styles.wrapper} style={{ display: "none" }}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            divRef.current.style.display = "none";
            setText("");
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            divRef.current.style.display = "none";
            creatNewPlaylist(text);
            setText("");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};
