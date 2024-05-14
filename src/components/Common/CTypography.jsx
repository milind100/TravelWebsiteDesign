import { Typography } from "@mui/material";
import React from "react";

const CTypography = ({ sx, ...props }) => {
  return <Typography {...props} sx={sx} />;
};

export default CTypography;
