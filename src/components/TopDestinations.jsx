import React from "react";
import CContainer from "./Common/CContainer";
import SectionTitle from "./Common/SectionTitle";
import CStack from "./Common/CStack";
import CTypography from "./Common/CTypography";
import { ReactComponent as Vector } from "../Assets/svg/vector.svg";
import { ReactComponent as Spring } from "../Assets/svg/spring.svg";

import { makeStyles } from "@mui/styles";
import CBox from "./Common/CBox";

const destinations = [
  {
    image:
      "https://www.pintspoundsandpate.com/uploads/1/2/0/9/120994087/the-roman-forum-9_orig.png",
    dest: "Rome, Italy",
    timeForTrip: 10,
    price: "5,42k",
  },
  {
    image:
      "https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg",
    dest: "London, Uk",
    timeForTrip: 12,
    price: "4.2k",
  },
  {
    image:
      "https://media.cntraveller.com/photos/65252c664aaabe7d8aac1eba/16:9/w_6704,h_3771,c_limit/51%20things%20to%20do%20in%20Europe%20before%20you%20die_Arthur's%20Seat-GettyImages-1364677606.jpg",
    dest: "Full Europe",
    timeForTrip: 12,
    price: "15k",
  },
];

const useStyles = makeStyles(() => ({
  destBox: {
    maxWidth: 314,
    height: 457,
    boxShadow: "0 1px 10px rgb(0 0 0 / 0.2)",
    borderRadius: 24,
    zIndex: 20,
    backgroundColor: "#FFF",
    position: "relative",
  },
  cardText: {
    "&.MuiTypography-root": {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      color: "#5E6282",
    },
  },
}));

const TopDestinations = () => {
  const classes = useStyles();
  return (
    <CContainer sx={{ my: 12 }}>
      <SectionTitle smallHead={"Top Selling"} heading={"Top Destinations"} />
      <CStack
        justifyContent="space-around"
        gap={{ xs: 4, md: 1 }}
        sx={{
          mx: 4,
          mt: 6,
          flexWrap: "wrap",
          overflow: { xs: "hidden", smd: "visible" },
        }}
      >
        {destinations?.map(({ image, dest, timeForTrip, price }, index) => {
          return (
            <CBox key={dest} className={classes.destBox}>
              <img
                src={image}
                alt=""
                style={{
                  height: "327px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "24px 24px 0 0",
                }}
              />
              <CBox sx={{ padding: "22px 20px 40px 20px" }}>
                <CStack
                  gap={{ xs: "20px", xm: "103px" }}
                  sx={{ flexWrap: "wrap" }}
                >
                  <CTypography
                    className={classes.cardText}
                    sx={{ fontSize: 18 }}
                  >
                    {dest}
                  </CTypography>
                  <CTypography
                    className={classes.cardText}
                    sx={{ fontSize: 18 }}
                  >
                    ${price}
                  </CTypography>
                </CStack>
                <CTypography
                  className={classes.cardText}
                  sx={{
                    mt: "12px",
                    fontSize: "16px",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <Vector />
                  {timeForTrip} Days Trip
                </CTypography>
              </CBox>
              <CBox
                sx={{
                  position: "absolute",
                  bottom: 40,
                  right: -65,
                  zIndex: -10,
                  ...((index + 1) % 3 !== 0 && { display: "none" }),
                }}
              >
                <Spring />
              </CBox>
            </CBox>
          );
        })}
      </CStack>
    </CContainer>
  );
};

export default TopDestinations;
