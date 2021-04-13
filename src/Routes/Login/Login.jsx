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
  const [emailError, setEmailError] = useState(false);

  const loginBtnHandler = () => {
    if (validateUserInput({ email }).checkEmail) {
      setEmailError(false);
      axios
        .post("https://playstream.kushanksriraj.repl.co/users", {
          email,
          password
        })
        .then((res) => {
          setLogin(res.data.success);
          if (res.data.success) {
            navigate(location?.state?.from ? location.state.from : "/");
          }
          setUserName(res.data.name);
        });
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isUserLoggedIn && (
        <Navigate to={location?.state?.from ? location.state.from : "/"} />
      )}
      <h1>Login</h1>

      {location?.state?.from && (
        <h4>Login to continue to {location.state.from.split("/")[1]} </h4>
      )}

      <div>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && "You email is incorrect"}
      </div>
      <div>
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={loginBtnHandler}>Login</button>

      <Link
        state={{
          from: location?.state?.from ? location.state.from : "/"
        }}
        replace
        to="/signup"
      >
        Sign up
      </Link>
    </div>
  );
};
