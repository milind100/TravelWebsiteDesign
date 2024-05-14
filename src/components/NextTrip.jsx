import React from "react";
import CContainer from "./Common/CContainer";
import CStack from "./Common/CStack";
import CBox from "./Common/CBox";
import SectionTitle from "./Common/SectionTitle";

import { ReactComponent as Square } from "../Assets/svg/squaresym.svg";
import { ReactComponent as Water } from "../Assets/svg/watersym.svg";
import { ReactComponent as Car } from "../Assets/svg/carSym.svg";
import { ReactComponent as MapIcon } from "../Assets/svg/map.svg";
import { ReactComponent as HollowHeart } from "../Assets/svg/hollowHeart.svg";
import { ReactComponent as Leaaf } from "../Assets/svg/leaaf.svg";
import { ReactComponent as Building } from "../Assets/svg/building.svg";
import { ReactComponent as SendIcon } from "../Assets/svg/send.svg";

import CTypography from "./Common/CTypography";
import { makeStyles } from "@mui/styles";
import { styled, useMediaQuery } from "@mui/material";

const StyledShowCard = styled(CBox)(({ theme }) => ({
  maxWidth: 370,
  height: 400,
  padding: "20px 25px 0px 25px",
  position: "relative",
  backgroundColor: "#FFFFFF",
  borderRadius: 18,
  boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
  [theme.breakpoints.down("xm")]: {
    padding: "20px 45px 0px 45px",
  },
}));
const StyledSmallShowCard = styled(CBox)(({ theme }) => ({
  padding: "20px 10px 0 20px",
  maxWidth: 263,
  height: 129,
  width: "100%",
  position: "absolute",
  bottom: 38,
  right: -75,
  backgroundColor: "#FFFFFF",
  borderRadius: 18,
  boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
  [theme.breakpoints.down("mmd")]: {
    position: "relative",
    padding: "20px 10px 0 35px",
    maxWidth: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
}));

const BlueEclipseColor = styled(CBox)(({ theme }) => ({
  width: "354px",
  height: "367px",
  backgroundColor: "#59B1E6",
  borderRadius: "50%",
  opacity: 0.8,
  filter: "blur(75px)",
  position: "absolute",
  top: -45,
  right: -70,
  zIndex: -100,
  [theme.breakpoints.down("smd")]: {
    display: "none",
  },
}));

const StyledImgCard = styled("img")(({ theme }) => ({
  width: 321,
  height: 161,
  [theme.breakpoints.down("xm")]: {
    width: 225,
  },
}));

const StepText = styled(CTypography)(({ theme }) => ({
  "&.MuiTypography-root": {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 400,
    color: "#5E6282",
    [theme.breakpoints.down("smd")]: {
      fontSize: 14,
    },
  },
}));

const useStyles = makeStyles(() => ({
  showCardText: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontSize: 16,
      fontWeight: 400,
      color: "#84829A",
    },
  },
  showCardTextBlack: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 18,
      color: "#080809",
    },
  },
}));

const steps = [
  {
    symbol: <Square />,
    symbolBoxColor: "#F0BB1F",
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    symbol: <Water />,
    symbolBoxColor: "#F15A2B",
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    symbol: <Car />,
    symbolBoxColor: "#006380",
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
];

const NextTrip = () => {
  const classes = useStyles();
  const mobileMatches = useMediaQuery("(min-width:720px)");

  const smallCard = (
    <StyledSmallShowCard>
      <CStack gap={"11px"} sx={{ alignItems: "flex-start" }}>
        <img
          src="https://i.makeagif.com/media/12-27-2017/27vSK8.gif"
          alt=""
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
        <CStack direction="column" sx={{ alignItems: "flex-start" }}>
          <CTypography className={classes.showCardText}>Ongoing</CTypography>
          <CTypography className={classes.showCardTextBlack}>
            Trip to rome
          </CTypography>
          <CTypography className={classes.showCardTextBlack} marginTop={"13px"}>
            <span style={{ color: "#8A79DF" }}>40%</span> completed
          </CTypography>
        </CStack>
      </CStack>
    </StyledSmallShowCard>
  );

  return (
    <CContainer>
      <CStack
        sx={{ mx: 3 }}
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 10, md: 0 }}
      >
        <CStack
          sx={{ flexBasis: "100%", alignItems: "flex-start" }}
          direction="column"
          gap={5}
        >
          <SectionTitle
            sx={{ alignItems: "flex-start" }}
            smallHead={"Easy and Fast"}
            heading={"Book your next trip in 3 easy steps"}
          />
          {steps?.map(({ symbol, symbolBoxColor, title, desc }) => {
            return (
              <CStack key={title} gap={2} sx={{ alignItems: "flex-start" }}>
                <CBox
                  sx={{
                    padding: "13px",
                    borderRadius: "13px",
                    backgroundColor: symbolBoxColor,
                  }}
                >
                  {symbol}
                </CBox>
                <CBox sx={{ maxWidth: "327px" }}>
                  <StepText style={{ fontWeight: 700 }}>{title}</StepText>
                  <StepText>{desc}</StepText>
                </CBox>
              </CStack>
            );
          })}
        </CStack>
        <CStack
          sx={{
            flexBasis: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          direction={{ xs: "column", mmd: "row" }}
        >
          <StyledShowCard>
            <BlueEclipseColor />

            <StyledImgCard
              src="https://curioustimes.in/wp-content/uploads/2024/02/Reimagining-International-Relations-The-Greece-India-Link.jpg"
              alt=""
              style={{ borderRadius: 24 }}
            />
            <CTypography
              className={classes.showCardTextBlack}
              sx={{ mt: "26px" }}
            >
              Trip To Greece
            </CTypography>
            <CTypography className={classes.showCardText} marginTop={"13px"}>
              14-29 June | by Robbin joseph
            </CTypography>
            <CStack gap={"13px"} marginTop={"21px"}>
              <Leaaf />
              <MapIcon />
              <SendIcon />
            </CStack>
            <CStack justifyContent="space-between" marginTop={"30px"}>
              <CTypography className={classes.showCardText}>
                <Building />
                {"   "}
                24 people going
              </CTypography>
              <HollowHeart />
            </CStack>
            {mobileMatches && smallCard}
          </StyledShowCard>
          {!mobileMatches && smallCard}
        </CStack>
      </CStack>
    </CContainer>
  );
};

export default NextTrip;
