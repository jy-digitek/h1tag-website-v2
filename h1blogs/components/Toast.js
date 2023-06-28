// import React from 'react'
// import { Button } from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";

export default function Toast() {
  const toast = useToast();
  return toast({
    title: "Success",
    description: "We've received your query and will get back to you shortly.",
    status: "success",
    duration: 6000,
    isClosable: true,
  });
}
