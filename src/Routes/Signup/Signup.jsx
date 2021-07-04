import styles from "./Signup.module.css";
import { useAuth } from "../../hooks";
import { useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { validateUserInput } from "../utils";
import axios from "axios";

export const Signup = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUserSignedIn, setSignIn] = useState(false);
  const [error, setError] = useState("");
  const [togglePassword, setTogglePassword] = useState(true);

  const { setLogin, setUserName } = useAuth();

  const location = useLocation();

  const signupBtnHandler = () => {
    const validations = validateUserInput({
      name: newName,
      email: newEmail,
      password: newPassword
    });

    if (newPassword !== confirmPassword) {
      setError("Your password didn't match!");
    } else if (
      validations.checkName &&
      validations.checkEmail &&
      validations.checkPassword
    ) {
      setError("");
      axios
        .post("https://playstream.kushanksriraj.repl.co/users/new", {
          email: newEmail,
          password: newPassword,
          name: newName
        })
        .then((res) => {
          setSignIn(res.data.success);
          setLogin(true);
          setUserName(newName);
        });
    } else {
      !validations.checkName && setError("Name must be characters only!");
      !validations.checkEmail && setError("Invalid email!");
      !validations.checkPassword && setError("Enter a strong password!");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Sign up</h1>
      <div className={styles.inputWrapper}>
        <label>
          Name
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label>
          Email
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label>
          Password
          <div style={{ position: "relative" }}>
            <input
              type={togglePassword ? "password" : "text"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div
              onClick={() => setTogglePassword((prev) => !prev)}
              className={styles.toggleShowPassword}
            >
              {togglePassword ? "Show" : "Hide"}
            </div>
          </div>
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label>
          Confirm password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={signupBtnHandler}>Sign up</button>
      {error}
      <h4>
        {isUserSignedIn && (
          <Navigate
            state={{
              from: location?.state?.from ? location.state.from : "/"
            }}
            to="/login"
          />
        )}
      </h4>
    </div>
  );
};
