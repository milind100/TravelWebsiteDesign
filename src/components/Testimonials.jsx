import React, { useRef, useState } from "react";
import CContainer from "./Common/CContainer";
import CStack from "./Common/CStack";
import CBox from "./Common/CBox";
import SectionTitle from "./Common/SectionTitle";
import { makeStyles } from "@mui/styles";
import CardSlider from "./CardSlider";

const useStyles = makeStyles(() => ({}));

const Testimonials = () => {
  useStyles();
  return (
    <CContainer sx={{ my: 20 }}>
      <CStack
        sx={{
          width: "100%",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
        }}
        gap={{ xs: 0, smd: 10, md: 0 }}
        direction={{ xs: "column", md: "row" }}
      >
        <CStack sx={{ alignItems: "flex-start" }} direction="column" gap={5}>
          <SectionTitle
            sx={{ alignItems: "flex-start", maxWidth: { xs: "100%", md: 410 } }}
            smallHead={"Testimonials"}
            heading={"What people say about Us."}
          />
        </CStack>
        <CBox>
          <CardSlider />
        </CBox>
      </CStack>
    </CContainer>
  );
};

export default Testimonials;
