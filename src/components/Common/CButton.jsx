import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  textTransform: "none",
  color: "#212832",
  "&:hover": {
    color: `${theme.palette.primary.red}`,
  },
}));

const CButton = ({ children, className, ...props }) => {
  return (
    <StyledButton
      className={`${className ? className : ""}`}
      disableElevation
      {...props}
    >
      {children}
    </StyledButton>
  );
};
export default CButton;
