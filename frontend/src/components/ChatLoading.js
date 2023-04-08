import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack background="#9DF3C4">
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
      <Skeleton height="45px" borderRadius="lg" />
    </Stack>
  );
};

export default ChatLoading;
