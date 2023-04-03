import React from "react";
import { Button } from "@chakra-ui/react";

export const GlobalButton = ({ label, color, ...rest }) => {
  return (
    <Button colorScheme={color} {...rest}>
      {label}
    </Button>
  );
};
