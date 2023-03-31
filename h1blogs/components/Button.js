import React from "react";
import { Button } from "@chakra-ui/react";

export const GlobalButton = ({ children, color, ...rest }) => {
  return (
    <Button colorScheme={color} {...rest}>
      {children}
    </Button>
  );
};
