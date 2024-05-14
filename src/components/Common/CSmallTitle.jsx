import { Typography } from "@mui/material";
import React from "react";

const CSmallTitle = ({ sx, children }) => {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "26px",
        fontFamily: "Anek Bangla",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CSmallTitle;
