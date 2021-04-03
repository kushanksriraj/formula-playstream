import { useRef, useState } from "react";
import { useUserData } from "../../hooks";

export const PlaylistEdit = ({ playlist }) => {
  const [text, setText] = useState(playlist.name);
  const [btnState, setBtnState] = useState(false);
  const inputRef = useRef(null);
  const { editPlaylistOnClick, deletePlaylistOnClick } = useUserData();

  return (
    <div>
      :-
      <input
        type="text"
        ref={inputRef}
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
        disabled
      />
      {btnState ? (
        <button
          onClick={() => {
            inputRef.current.disabled = true;
            setBtnState((prev) => !prev);
            editPlaylistOnClick(playlist.id, text);
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            inputRef.current.disabled = false;
            setBtnState((prev) => !prev);
          }}
        >
          Edit
        </button>
      )}
      <button onClick={() => deletePlaylistOnClick(playlist.id)}>Delete</button>
    </div>
  );
};
