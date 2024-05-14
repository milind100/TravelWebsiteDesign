import { Typography } from "@mui/material";
import React from "react";

const CTitle = ({ sx, children }) => {
  return (
    <Typography
      lineHeight="48px"
      fontWeight={800}
      fontSize={{ xs: 25, xsm: 40 }}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CTitle;
