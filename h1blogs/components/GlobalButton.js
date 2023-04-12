import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "../styles/btn.module.css";

export const GlobalButton = ({ label, color, ...rest }) => {
  return (
    <Button className={styles.h1Btn} role="button" {...rest}>
      {label}
    </Button>
  );
};
