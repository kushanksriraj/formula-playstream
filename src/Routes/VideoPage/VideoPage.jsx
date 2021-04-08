import styles from "./VideoPage.module.css";
import { LikeButton, SaveButton, AddToPlaylist } from "../../Components";
import { useParams, useNavigate } from "react-router-dom";
import { useUserData } from "../../hooks";

export const VideoPage = () => {
  const { getVideoById } = useUserData();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const video = getVideoById(id);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backButton}>
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <div className="icon" style={{ fill: "var(--color-3)" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 2540 3175"
              x="0px"
              y="0px"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <g>
                <path d="M932 720c50,-49 50,-130 0,-179 -49,-50 -130,-50 -179,0l-640 639c-49,50 -49,130 0,180l640 639c49,50 130,50 179,0 50,-49 50,-130 0,-179l-422 -423 1827 0c70,0 127,-57 127,-127 0,-70 -57,-127 -127,-127l-1827 0 422 -423z" />
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div className={styles.iframeWrapper}>
        <iframe
          className={styles.iframeVideo}
          title="Video"
          src={`https://www.youtube.com/embed/${video.id}`}
        ></iframe>
        <div className={styles.name}>{video.name}</div>
      </div>
      <div className={styles.actionBtnsWrapper}>
        <LikeButton id={video.id} /> 
        <SaveButton id={video.id} />
        {/*<AddToPlaylist id={video.id} /> */}
      </div>
      <div className={styles.videoDesc}>{video.desc}</div>
    </div>
  );
};
