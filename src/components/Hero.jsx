import React from "react";
import heroBack from "../Assets/svg/heroBack.svg";
import { ReactComponent as PlayButtonRed } from "../Assets/svg/playButtonRed.svg";
import { ReactComponent as HeroDecor } from "../Assets/svg/heroDecor.svg";
import girlPlanes from "../Assets/jpg/girllPlane.png";
import CBox from "./Common/CBox";
import CContainer from "./Common/CContainer";
import CStack from "./Common/CStack";
import CTypography from "./Common/CTypography";
import CButton from "./Common/CButton";
import { styled, useMediaQuery } from "@mui/material";

const StyledHead = styled(CTypography)(({ theme }) => ({
  "&.MuiTypography-root": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#DF6951",
    [theme.breakpoints.down("smd")]: {
      fontSize: 16,
      textAlign: "center",
    },
  },
}));

const StyledMainHead = styled(CTypography)(({ theme }) => ({
  maxWidth: "545px",
  position: "relative",
  "&.MuiTypography-root": {
    fontFamily: "Volkhov",
    fontSize: 84,
    lineHeight: "89px",
    fontWeight: 700,
    color: "#181E4B",
    letterSpacing: -4,
    [theme.breakpoints.down("smd")]: {
      fontSize: 50,
      lineHeight: "60px",
      letterSpacing: 0,
      textAlign: "center",
    },
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));
const StyledParaDesc = styled(CTypography)(({ theme }) => ({
  "&.MuiTypography-root": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    lineHeight: "30px",
    fontWeight: 400,
    color: "#5E6282",
    maxWidth: "472px",
    [theme.breakpoints.down("smd")]: {
      fontSize: 14,
      textAlign: "center",
    },
  },
}));
const StyledCaptionText = styled(CTypography)(({ theme }) => ({
  "&.MuiTypography-root": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 17,
    lineHeight: "30px",
    fontWeight: 400,
    color: "#686D77",
    [theme.breakpoints.down("smd")]: {
      fontSize: 13,
      textAlign: "center",
    },
  },
}));
const StyledFindButton = styled(CButton)(({ theme }) => ({
  "&.MuiButton-root": {
    maxWidth: "170px",
    maxHeight: "60px",
    width: "100%",
    height: "60px",
    borderRadius: 10,
    backgroundColor: "#F1A501",
    boxShadow: "0px 20px 35px 0px #F1A50126",
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: 500,
    color: "#FFFFFF",
    [theme.breakpoints.down("smd")]: {
      fontSize: 12,
      width: "40%",
      height: "40px",
    },
  },
}));

const Hero = () => {
  const mobileMatches = useMediaQuery("(min-width:964px)");
  return (
    <CStack sx={{ overflow: { xs: "hidden", mmd: "visible" } }}>
      <img
        src={heroBack}
        alt=""
        style={{ position: "absolute", right: 0, top: 0, zIndex: -100 }}
      />
      <CContainer
        sx={{
          mt: { xs: 2, md: 13.5 },
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <CStack
          sx={{ width: "100%" }}
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 10, smd: 0 }}
        >
          <CStack
            direction="column"
            gap={3}
            sx={{
              flexBasis: "100%",
              pt: "112px",
              alignItems: { xs: "center", smd: "flex-start" },
            }}
          >
            <StyledHead variant="h3">
              Best Destinations around the world
            </StyledHead>
            <StyledMainHead variant="h1">
              Travel,
              <span style={{ position: "relative" }}>
                enjoy
                <HeroDecor
                  style={{
                    position: "absolute",
                    left: -20,
                    bottom: 18,
                    zIndex: -6,
                  }}
                />
              </span>{" "}
              and live a new and full life
            </StyledMainHead>
            <StyledParaDesc variant="p1">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </StyledParaDesc>
            <CStack gap={2} alignItems="flex-start" width="100%">
              <StyledFindButton>Find out more</StyledFindButton>
              <PlayButtonRed />
              <StyledCaptionText>Play Demo</StyledCaptionText>
            </CStack>
          </CStack>
          <CBox sx={{ flexBasis: "100%" }}>
            {mobileMatches ? (
              <img
                src={girlPlanes}
                alt=""
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  zIndex: -10,
                }}
              />
            ) : (
              <img
                src={girlPlanes}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </CBox>
        </CStack>
      </CContainer>
    </CStack>
  );
};

export default Hero;
