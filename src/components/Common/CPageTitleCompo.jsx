import React from "react";
import CStack from "./CStack";
import CSmallTitle from "./CSmallTitle";
import CTitle from "./CTitle";
import CSubTitle from "./CSubTitle";

const CPageTitleCompo = ({
  smallTitle,
  title,
  subTiltle,
  sx,
  smallTitleColor = "black",
}) => {
  return (
    <CStack
      alignItems="center"
      maxWidth={730}
      textAlign="center"
      margin="auto"
      marginBottom="56px"
      sx={sx}
      gap="10px"
    >
      <CSmallTitle sx={{ color: smallTitleColor }}>
        {smallTitle?.toUpperCase()}
      </CSmallTitle>
      <CTitle>{title}</CTitle>
      <CSubTitle>{subTiltle}</CSubTitle>
    </CStack>
  );
};

export default CPageTitleCompo;
