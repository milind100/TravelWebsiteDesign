import { Box } from "@mui/material";
import React from "react";

const CBox = React.forwardRef(({ ...props }, ref) => {
  return <Box ref={ref} {...props} />;
});

export default CBox;
