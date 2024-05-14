import React from "react";
import { ReactComponent as SpiralRight } from "../Assets/svg/spiralRight.svg";
import { ReactComponent as EmailIcon } from "../Assets/svg/emailIcon.svg";
import { ReactComponent as SpiralDown } from "../Assets/svg/downSpiral.svg";
import { ReactComponent as SendButton } from "../Assets/svg/sendButton.svg";
import { ReactComponent as SideLines } from "../Assets/svg/sideLinesBottom.svg";
import CContainer from "./Common/CContainer";
import CBox from "./Common/CBox";
import { makeStyles } from "@mui/styles";
import CTypography from "./Common/CTypography";
import CStack from "./Common/CStack";
import CButton from "./Common/CButton";
import { Box, styled, useMediaQuery } from "@mui/material";
import theme from "./Themes/Themes";

const StyledHeading = styled(CTypography)(({ theme }) => ({
  "&.MuiTypography-root": {
    fontFamily: "poppins",
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "54px",
    color: "#5E6282",
    margin: "auto",
    textAlign: "center",
    maxWidth: "859px",
    [theme.breakpoints.down("xsm")]: {
      fontSize: 28,
      lineHeight: "34px",
    },
    [theme.breakpoints.down("xm")]: {
      fontSize: 18,
      lineHeight: "34px",
    },
  },
}));

const StyledInput = styled("input")(() => ({
  width: 421,
  height: 68,
  borderRadius: "10px",
  border: "none",
  paddingLeft: 66,
  fontSize: 14,
  fontWeight: 400,
  fontSize: 18,
  [theme.breakpoints.down("xsm")]: {
    width: 201,
  },
  [theme.breakpoints.down("xm")]: {
    width: 150,
  },
}));

const MainButton = styled(CButton)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    padding: "23px 50px",
    maxWidth: 180,
    borderRadius: "10px",
    background: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)",
    color: "#fff",
    fontFamily: "Open Sans",
    fontWeight: "600",
    [theme.breakpoints.down("xm")]: {
      maxWidth: 100,
    },
  },
}));

const useStyles = makeStyles(() => ({
  mainBox: {
    maxWidth: 1170,
    width: "100%",
    height: "100%",
    borderRadius: "129px 20px 20px 20px",
    backgroundColor: "rgba(223, 215, 249, 0.2)",
    padding: [[78, 0]],
    position: "relative",
    // overflow: "hidden",
  },
  mainText: {
    "&.MuiTypography-root": {
      fontFamily: "poppins",
      fontWeight: 600,
      fontSize: 32,
      lineHeight: "54px",
      color: "#5E6282",
      margin: "auto",
      textAlign: "center",
      maxWidth: "859px",
    },
  },
}));

const SubscribePage = () => {
  const classes = useStyles();
  const mobileMatches = useMediaQuery("(min-width:1250px)");
  const mobileMax = useMediaQuery("(min-width:400px)");

  return (
    <CBox sx={{ position: "relative", mt: 22, mb: 22 }}>
      <CContainer>
        <CBox className={classes.mainBox}>
          {mobileMatches && (
            <SideLines
              style={{ position: "absolute", bottom: -80, right: -100 }}
            />
          )}
          <SendButton
            style={{ top: -20, right: -20, position: "absolute", zIndex: "20" }}
          />
          <SpiralRight
            style={{
              top: 0,
              right: 0,
              position: "absolute",
              zIndex: -20,
              opacity: 0.2,
            }}
          />
          {mobileMax && (
            <SpiralDown
              style={{
                bottom: 0,
                left: 0,
                position: "absolute",
                zIndex: -20,
                opacity: 0.2,
              }}
            />
          )}
          <StyledHeading>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </StyledHeading>
          <CStack
            sx={{
              width: "100%",
              margin: "auto",
              justifyContent: "center",
              mt: "74px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <EmailIcon style={{ position: "absolute", top: 25, left: 35 }} />
              <StyledInput type="text" placeholder="your text" />
              <style>
                {` 
                    ::placeholder { 
                        color: "#39425D";
                        font-weight:400;
                        font-size:14px; 
                    }`}
              </style>
            </Box>
            <MainButton>Subscribe</MainButton>
          </CStack>
        </CBox>
      </CContainer>
    </CBox>
  );
};

export default SubscribePage;
