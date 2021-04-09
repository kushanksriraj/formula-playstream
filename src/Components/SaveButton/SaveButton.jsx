import styles from "./SaveButton.module.css";

import { useUserData } from "../../hooks";

export const SaveButton = ({ id }) => {
  const { isSaved, toggleSaved } = useUserData();

  return (
    <div style={{ position: "relative" }}>
    <button 
      data-tooltip={isSaved(id) ? "Remove" : "Save"}
    className="btn-icon" onClick={() => toggleSaved(id)}>
      <div
        className="icon"
        style={{
          fill: isSaved(id) ? "var(--color-3)" : "var(--color-2)"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 35"
          x="0px"
          y="0px"
        >
          <path d="M18.807,1H9.193A5.2,5.2,0,0,0,4,6.193V26a1,1,0,0,0,1.555.832L14,21.2l8.445,5.63A1,1,0,0,0,24,26V6.193A5.2,5.2,0,0,0,18.807,1Z" />
        </svg>
      </div>
    </button>
    </div>
  );
};
