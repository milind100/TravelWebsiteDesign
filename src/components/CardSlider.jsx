import React, { useState } from "react";
import CBox from "./Common/CBox";
import CStack from "./Common/CStack";
import CTypography from "./Common/CTypography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles, styled } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import theme from "./Themes/Themes";

const testiData = [
  {
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6npC3-Tb9CYe31lENQidHMd4Z25bgDoyj4ZEeNJf8Q&s",
    name: "raj purohit",
    location: "sultanabad ,arab",
    review:
      "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
  },
  {
    profile:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    name: "suraykumar",
    location: "rajapur ,london",
    review:
      "Sure last upon he same as knew next. Of believed or diverted parties use. Sure last ",
  },
  {
    profile:
      "https://www.shutterstock.com/image-photo/portrait-smiling-millennial-arabic-businessman-260nw-1769759789.jpg",
    name: "Robert sharma",
    location: "surat,india",
    review:
      "pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no. lorem",
  },
  {
    profile:
      "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=",
    name: "Gemma chan",
    location: "new york , London",
    review:
      "lorem55 talking painted pasture yet its express parties use. Sure last ",
  },
];

const ArrowsBox = styled(CStack)({
  right: 5,
  position: "absolute",
  top: "35%",
  [theme.breakpoints.down("smd")]: {
    position: "relative",
    top: -20,
    rotate: "90deg",
    gap: "100px",
  },
});

const useStyles = makeStyles(() => ({
  boxStyle: {
    maxWidth: 504,
    height: 245,
    borderRadius: 10,
    padding: "28px 68px 34px 34px",
    backgroundColor: "#FFF",
    animation: "$slideUp 0.5s ease",
    justifyContent: "space-between",
    border: "2px solid rgba(247, 247, 247, 1);",
  },
  reviewText: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "32px",
      textAlign: "left",
      maxWidth: "402px",
      color: "#5E6282",
    },
  },
  reviewText: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "32px",
      textAlign: "left",
      maxWidth: "402px",
      color: "#5E6282",
    },
  },
  nameText: {
    "&.MuiTypography-root": {
      fontFamily: "Poppins",
      fontSize: "18px",
      fontWeight: 600,
      mt: "34px",
      color: "#5E6282",
    },
  },
  locationText: {
    "&.MuiTypography-root": {
      color: "#5E6282",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontWeight: 400,
    },
  },
  profileImageStyle: {
    height: 68,
    width: 68,
    borderRadius: "50%",
    position: "absolute",
    zIndex: 40,
    top: -35,
    left: -35,
  },
}));

const CardSlider = () => {
  const classes = useStyles();

  const [testi, setTesti] = useState(0);

  const upClick = () => {
    if (testi === testiData.length - 1) {
      setTesti(0);
    } else {
      setTesti(testi + 1);
    }
  };
  const downClick = () => {
    if (testi === 0) {
      setTesti(testiData.length - 1);
    } else {
      setTesti(testi - 1);
    }
  };

  return (
    <CBox
      sx={{
        width: { xs: "100vw", xsm: 669 },
        height: 356,
        position: "relative",
        margin: "auto",
      }}
    >
      <CBox>
        {testiData?.map(({ name, location, review, profile }, i) => {
          const activeCard = testi === i;
          const afterCard =
            testi === testiData.length - 1 ? i === 0 : testi + 1 === i;
          return (
            <CStack
              key={name}
              direction="column"
              className={`${classes.boxStyle}  ${
                activeCard ? "slide" : "slideNot"
              }`}
              sx={{
                alignItems: "flex-start",
                position: "absolute",
                bottom: 0,
                left: { xs: "30px", mmd: "100px" },
                zIndex: activeCard ? 1 : afterCard ? -5 : -10,
              }}
            >
              <img
                src={profile}
                key={name}
                alt=""
                style={{ ...(!activeCard && { visibility: "hidden" }) }}
                className={classes.profileImageStyle}
              />
              <CTypography className={classes.reviewText}>
                "{review}"
              </CTypography>
              <CBox>
                <CTypography className={classes.nameText}>{name}</CTypography>
                <CTypography className={classes.locationText}>
                  {location}
                </CTypography>
              </CBox>
            </CStack>
          );
        })}
      </CBox>
      <ArrowsBox direction="column" gap={{ smd: 4, xs: 11 }}>
        <KeyboardArrowUpIcon onClick={upClick} />
        <KeyboardArrowDownIcon onClick={downClick} />
      </ArrowsBox>
    </CBox>
  );
};

export default CardSlider;
