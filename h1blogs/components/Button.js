import React from "react";
import { Button } from "@chakra-ui/react";

export const GlobalButton = ({ children, color }) => {
  return <Button colorScheme={color}>{children}</Button>;
};
