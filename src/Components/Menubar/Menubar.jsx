import styles from "./Menubar.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Menubar = ({ toggleSidebar, setToggleSidebar }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn, setLogin } = useAuth();
  return (
    <section
      className={
        toggleSidebar
          ? `${styles.menubar} ${styles.menubarToggle}`
          : styles.menubar
      }
    >
      <button
        onClick={() => {
          navigate("/");
          setToggleSidebar((prev) => !prev);
        }}
      >
        <div>Home</div>
      </button>
      <button
        onClick={() => {
          navigate("/history");
          setToggleSidebar((prev) => !prev);
        }}
      >
        <div>History</div>
      </button>
      <button
        onClick={() => {
          navigate("/library");
          setToggleSidebar((prev) => !prev);
        }}
      >
        <div>Library</div>
      </button>

      {isUserLoggedIn ? (
        <>
          <button
            onClick={() => {
              setLogin(false);
              setToggleSidebar((prev) => !prev);
            }}
          >
            <div>Log out</div>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              navigate("/login");
              setToggleSidebar((prev) => !prev);
            }}
          >
            <div>Login</div>
          </button>
          <button
            onClick={() => {
              navigate("/signup");
              setToggleSidebar((prev) => !prev);
            }}
          >
            <div>Sign up</div>
          </button>
        </>
      )}
    </section>
  );
};
