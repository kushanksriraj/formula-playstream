import styles from "./History.module.css";
import { useUserData } from "../../hooks";
import { MainSection } from "../../Components";
import { useNavigate } from "react-router-dom";

export const History = () => {
  const { getSelectedPlaylist, clearHistory } = useUserData();
  const navigate = useNavigate();

  const videoList = getSelectedPlaylist("HISTORY").videos;

  if (videoList.length) {
    return (
      <div className={styles.listWrapper}>
        <button onClick={clearHistory}>Clear</button>
        <MainSection route={"History"} videoList={videoList} />
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <button onClick={() => navigate(-1)}>Back</button>
        <div className={styles.emptyPrompt}>Nothing here yet.</div>
      </div>
    );
  }
};
