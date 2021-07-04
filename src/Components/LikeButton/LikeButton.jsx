import styles from "./LikeButton.module.css";

import { useUserData } from "../../hooks";

export const LikeButton = ({ id }) => {
  const { isLiked, toggleLiked } = useUserData();

  return (
    <div style={{ position: "relative" }}>
      <button
        data-tooltip={isLiked(id) ? "Unlike" : "Like"}
        className="btn-icon"
        onClick={() => toggleLiked(id)}
      >
        <div
          className="icon"
          style={{ fill: isLiked(id) ? "var(--color-3)" : "var(--color-2)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 40"
            x="0px"
            y="0px"
          >
            <rect x="1" y="11" width="6" height="20" rx="1" />
            <path d="M30.188,13.625A4.123,4.123,0,0,0,26.892,12H21.618l2.094-4.188a4.661,4.661,0,0,0-.874-5.388,2.64,2.64,0,0,0-1.846-.736,2.527,2.527,0,0,0-1.8.833L14.249,8.007A22.523,22.523,0,0,1,9,12.3V29.047l1.376,1.072a5.234,5.234,0,0,0,2.91.881H22.4a6.3,6.3,0,0,0,6.086-4.676l2.426-9.1A4.125,4.125,0,0,0,30.188,13.625Z" />
          </svg>
        </div>
      </button>
    </div>
  );
};
