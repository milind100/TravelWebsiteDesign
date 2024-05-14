import React from "react";
import CTypography from "./CTypography";
import CStack from "./CStack";

const SectionTitle = ({ sx, heading, smallHead, headingSx, smallHeadSx }) => {
  return (
    <CStack sx={{ gap: "10px", ...sx }} direction="column">
      <CTypography
        sx={{
          fontSize: { xs: 16, mmd: 18 },
          fontWeight: 600,
          color: "#5E6282",
          ...headingSx,
        }}
      >
        {smallHead}
      </CTypography>
      <CTypography
        sx={{
          fontFamily: "Volkhov",
          fontSize: { xs: 25, smd: 30, mmd: 50 },
          fontWeight: 700,
          lineHeight: { xs: "40px", xsm: "64.5px" },
          ...smallHeadSx,
        }}
      >
        {heading}
      </CTypography>
    </CStack>
  );
};

export default SectionTitle;
