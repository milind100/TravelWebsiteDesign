import React from "react";
import CContainer from "./Common/CContainer";
import CStack from "./Common/CStack";
import CTypography from "./Common/CTypography";
import { makeStyles } from "@mui/styles";
import { Link, Stack } from "@mui/material";
import CBox from "./Common/CBox";

import { ReactComponent as Facebook } from "../Assets/svg/faceBook.svg";
import insta from "../Assets/png/Insta.png";
import { ReactComponent as Tweeter } from "../Assets/svg/tweeter.svg";
import { ReactComponent as Apple } from "../Assets/svg/apple.svg";
import { ReactComponent as PlayStore } from "../Assets/svg/googlePlay.svg";
import CButton from "./Common/CButton";

const useStyles = makeStyles(() => ({
  mainLogo: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 500,
      cursor: "pointer",
      fontSize: 44,
    },
  },
  mainDesc: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "16.19px",
      maxWidth: 207,
      cursor: "pointer",
    },
  },

  mainFooterLink: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 21,
      color: "#080809",
      cursor: "pointer",
    },
  },
  subFooterLink: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 18,
      color: "#5E6282",
      cursor: "pointer",
    },
  },
  storeText: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 20,
      color: "#5E6282",
      marginTop: 26,
      marginBottom: 16,
    },
  },
}));

const footerSections = [
  {
    name: "Comapany",
    link: "",
    subLinks: [
      {
        name: "About",
        link: "",
      },
      {
        name: "Career",
        link: "",
      },
      {
        name: "Mobile",
        link: "",
      },
    ],
  },
  {
    name: "Contact",
    link: "",
    subLinks: [
      {
        name: "Help/FAQ",
        link: "",
      },
      {
        name: "Press",
        link: "",
      },
      {
        name: "Affilates",
        link: "",
      },
    ],
  },
  {
    name: "More",
    link: "",
    subLinks: [
      {
        name: "Airlinefees",
        link: "",
      },
      {
        name: "Airline",
        link: "",
      },
      {
        name: "Low fare tips",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <CContainer>
      <CStack
        sx={{
          mb: 10,
          alignItems: { xs: "center", xxsm: "flex-start" },
        }}
        direction={{ xs: "column", xxsm: "row" }}
        gap={10}
      >
        <CBox>
          <CTypography className={classes.mainLogo}>Jadoo.</CTypography>
          <CTypography className={classes.mainDesc}>
            Book your trip in minute, get full Control for much longer. .
          </CTypography>
        </CBox>
        <CStack marginTop="25px" sx={{ alignItems: "flex-start" }}>
          <CStack gap={9} sx={{ flexWrap: "wrap" }}>
            {footerSections?.map(({ name, link, subLinks }) => {
              return (
                <CStack
                  direction="column"
                  sx={{ alignItems: "flex-start" }}
                  gap="34px"
                >
                  <Link
                    level="title-lg"
                    underline="hover"
                    variant="plain"
                    className={classes.mainFooterLink}
                  >
                    {name}
                  </Link>
                  <CStack
                    direction="column"
                    sx={{ alignItems: "flex-start" }}
                    gap={"14px"}
                  >
                    {subLinks?.map(({ name: subanme, link }) => {
                      return (
                        <Link
                          level="title-sm"
                          underline="hover"
                          variant="plain"
                          className={classes.subFooterLink}
                        >
                          {subanme}
                        </Link>
                      );
                    })}
                  </CStack>
                </CStack>
              );
            })}
            <CBox>
              <CStack>
                <Facebook />
                <img src={insta} alt="" />
                <Tweeter />
              </CStack>
              <CTypography className={classes.storeText}>
                Discover our app
              </CTypography>
              <CStack>
                <CButton sx={{ p: 0, m: "2px" }}>
                  <PlayStore />
                </CButton>
                <CButton sx={{ p: 0, m: "2px" }}>
                  <Apple />
                </CButton>
              </CStack>
            </CBox>
          </CStack>
        </CStack>
      </CStack>
    </CContainer>
  );
};

export default Footer;
