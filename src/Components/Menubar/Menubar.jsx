import styles from "./Menubar.module.css";
import { useNavigate } from "react-router-dom";

export const Menubar = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.menubar}>
      <button onClick={() => navigate("/")}>
        <div>Home</div>
      </button>
      <button onClick={() => navigate("/history")}>
        <div>History</div>
      </button>
      <button onClick={() => navigate("/library")}>
        <div>Library</div>
      </button>
    </section>
  );
};
