import { useState } from "react";
import styles from "./Library.module.css";
import {ManagePlaylist} from "./ManagePlaylist";
import {AllPlaylist} from "./AllPlaylist";

export const Library = () => {

  const [route, setRoute] = useState("all");

  return (
    <>
    {route === "all" && <AllPlaylist setRoute={setRoute}/>}
    {route === "manage" && <ManagePlaylist setRoute={setRoute}/>}
    </>
  );
};
