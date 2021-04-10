import styles from "./Login.module.css";
import { useAuth } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const { isUserLoggedIn, setLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      This is the login page.
      {isUserLoggedIn ? (
        <button onClick={() => setLogin(false)}>Login out</button>
      ) : (
        <button
          onClick={() => {
            setLogin(true);
            navigate(location?.state?.from ? location.state.from : "/");
          }}
        >
          Login In
        </button>
      )}
    </div>
  );
};
