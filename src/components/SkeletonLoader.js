// src/components/SkeletonLoader.js
import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

const SkeletonLoader = ({ count }) => {
  return (
    <Stack spacing={4}>
      {[...Array(count)].map((_, index) => (
        <Skeleton key={index} height="200px" />
      ))}
    </Stack>
  );
};

export default SkeletonLoader;
