import styles from "./Home.module.css";
import { MainSection } from "../../Components";
import { useVideoData } from "../../hooks";

export const Home = () => {

  const { videoList } = useVideoData();
  
  return (
    <div className="main-wrapper">
      <MainSection route={"Latest"}  videoList={videoList}/>
    </div>
  );
};
