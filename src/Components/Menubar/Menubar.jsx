import styles from "./Menubar.module.css";
import { useControl } from "../../hooks";

export const Menubar = () => {
  const { changeRouteOnClick } = useControl();

  return (
    <section className={styles.menubar}>
      <button onClick={() => changeRouteOnClick("home")}>
        <div>Home</div>
      </button>
      <button onClick={() => changeRouteOnClick("library")}>
        <div>Library</div>
      </button>
    </section>
  );
};
