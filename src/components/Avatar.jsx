import { Link } from "react-router-dom";
import React from "react";
import styles from "./Logo.module.css";

function Avatar() {
  return (
    <Link to="/">
      <img src="/me.png" alt="Andrew" className={styles.logo} />
    </Link>
  );
}

export default Avatar;
