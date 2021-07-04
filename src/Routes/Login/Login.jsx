import styles from "./Login.module.css";
import { useAuth } from "../../hooks";
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { validateUserInput } from "../utils";
import axios from "axios";

export const Login = () => {
  const { isUserLoggedIn, setLogin, setUserName } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);

  const loginBtnHandler = () => {
    if (validateUserInput({ email }).checkEmail) {
      setError("");
      axios
        .post("https://playstream.kushanksriraj.repl.co/users", {
          email,
          password
        })
        .then((res) => {
          if (!res.data.success) {
            setError("Email or password didn't match!");
          }
          setLogin(res.data.success);
          if (res.data.success) {
            navigate(location?.state?.from ? location.state.from : "/");
          }
          setUserName(res.data.name);
        });
    } else {
      setError("Enter valid email!");
    }
  };

  return (
    <div className={styles.wrapper}>
      {isUserLoggedIn && (
        <Navigate to={location?.state?.from ? location.state.from : "/"} />
      )}
      <h1>Login</h1>

      {location?.state?.from && (
        <div className={styles.redirectPrompt}>
          Login to continue to {location.state.from.split("/")[1]}{" "}
        </div>
      )}

      <div className={styles.inputWrapper}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.inputWrapper}>
        <label>
          Password
          <div style={{ position: "relative" }}>
            <input
              type={togglePassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => setTogglePassword((prev) => !prev)}
              className={styles.toggleShowPassword}
            >
              {togglePassword ? "Show" : "Hide"}
            </div>
          </div>
        </label>
        <span className={styles.errorPrompt}>{error}</span>
      </div>

      <button>
        <Link
          state={{
            from: location?.state?.from ? location.state.from : "/"
          }}
          replace
          to="/signup"
          style={{ color: "var(--color-2)" }}
        >
          Sign up
        </Link>
      </button>
      <button onClick={loginBtnHandler}>Login</button>
    </div>
  );
};
