import React from "react";
import { Stack } from "@mui/material";

const CStack = React.forwardRef(({ direction = "row", sx, ...props }, ref) => {
  return (
    <Stack
      ref={ref}
      direction={direction}
      sx={{ alignItems: "center", ...sx }}
      {...props}
    />
  );
});

export default CStack;
