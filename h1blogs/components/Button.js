import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "../styles/btn.module.css";

export const GlobalButton = ({ label, color, ...rest }) => {
  return (
    // <Button colorScheme={color} {...rest}>
    //   {label}
    // </Button>
    <Button className={styles.h1Btn}>
      {/* <span className={styles.h1BtnShadow}></span>
      <span className={styles.h1BtnEdge}></span> */}
      <span className={`${styles.h1BtnFront} ${styles.text}`}>{label}</span>
    </Button>
  );
};
