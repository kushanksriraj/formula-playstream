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
  const [isUserSignedIn, setSignIn] = useState(false);
  const [error, setError] = useState("");

  const { setLogin, setUserName } = useAuth();

  const location = useLocation();

  const signupBtnHandler = () => {
    const validations = validateUserInput({
      name: newName,
      email: newEmail,
      password: newPassword
    });

    if (
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
      <h2>Sign up</h2>
      <div>
        Name:
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        Email:
        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </div>
      <div>
        Password:
        <input
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
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
