import React from "react";
import CContainer from "./Common/CContainer";
import CBox from "./Common/CBox";
import CTypography from "./Common/CTypography";
import { makeStyles } from "@mui/styles";
import CStack from "./Common/CStack";

import { ReactComponent as Satelite } from "../Assets/svg/satelite.svg";
import { ReactComponent as Plane } from "../Assets/svg/plane.svg";
import { ReactComponent as Mic } from "../Assets/svg/mic.svg";
import { ReactComponent as Tool } from "../Assets/svg/tool.svg";
import { ReactComponent as SideLines } from "../Assets/svg/servicesSide.svg";
import SectionTitle from "./Common/SectionTitle";
import { Grid, useMediaQuery } from "@mui/material";

const useStyles = makeStyles(() => ({
  subHead: {
    "&.MuiTypography-root": {
      fontSize: 18,
      textAlign: "center",
      fontWeight: 600,
      color: "#5E6282",
      marginTop: 25,
    },
  },
  mainHead: {
    "&.MuiTypography-root": {
      fontFamily: "Volkhov",
      fontSize: 50,
      textAlign: "center",
      fontWeight: 700,
    },
  },
  boxHead: {
    "&.MuiTypography-root": {
      fontFamily: "Open Sans",
      fontSize: 20,
      textAlign: "center",
      fontWeight: 600,
      color: "#1E1D4C",
    },
  },
  boxDesc: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontSize: 16,
      textAlign: "center",
      fontWeight: 400,
      color: "#5E6282",
      maxWidth: 181,
    },
  },
  redBox: {
    width: 100,
    height: 100,
    borderRadius: "30px 0px 10px 0px",
    backgroundColor: "#DF6951",
    position: "absolute",
    left: -50,
    bottom: -35,
    zIndex: -2,
    visibility: "hidden",
  },
  smallBox: {
    height: "314px",
    // width: "100%",
    justifyContent: "center",
    position: "relative",
    "&:hover": {
      borderRadius: "36px",
      cursor: "pointer",
      backgroundColor: "#FFFFFF",
      boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
    },
    "&:hover $redBox": {
      visibility: "visible", // Hide redBox on hover of smallBox
    },
  },
  //
}));

const sections = [
  {
    icon: <Satelite />,
    head: "Calculated Weather ",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: <Plane height={90} />,
    head: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: <Mic />,
    head: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    icon: <Tool />,
    head: "Customization",
    desc: "We deliver outsourced aviation services fo military customers",
  },
];

const Services = () => {
  const classes = useStyles();
  const mobileMatches = useMediaQuery("(min-width:964px)");

  return (
    <CContainer sx={{ mt: 20 }}>
      <CStack direction="column" gap={8} sx={{ position: "relative" }}>
        <SideLines
          style={{
            position: "absolute",
            right: 0,
            display: mobileMatches ? "block" : "none",
          }}
        />
        <SectionTitle
          smallHead={"CATEGORY"}
          heading={"We Offer Best Services"}
        />
        <Grid container justifyContent="center" alignItems="center" gap={0}>
          {sections.map(({ icon, head, desc }) => {
            return (
              <Grid item key={head} xs={12} smd={6} md={3}>
                <CStack className={classes.smallBox} direction="Column" gap={1}>
                  <CStack height={100} justifyContent="center">
                    {icon}
                  </CStack>
                  <CTypography className={classes.boxHead}>{head}</CTypography>
                  <CTypography className={classes.boxDesc}>{desc}</CTypography>
                  <CBox className={classes.redBox}></CBox>
                </CStack>
              </Grid>
            );
          })}
        </Grid>
      </CStack>
    </CContainer>
  );
};

export default Services;
