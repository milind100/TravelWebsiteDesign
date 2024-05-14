import { Typography } from "@mui/material";
import React from "react";
import theme from "../Themes/Themes";

const CSubTitle = ({ sx, children }) => {
  return (
    <Typography
      fontWeight={400}
      fontSize={{ xs: 14, xsm: 20 }}
      lineHeight={{ xs: "20px", xsm: "35px" }}
      color={theme.palette.lightBlack}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CSubTitle;
