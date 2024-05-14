import React from "react";
import alitalia from "../Assets/png/alitalia.png";
import axon from "../Assets/png/axon.png";
import expedia from "../Assets/png/expedia.png";
import qantas from "../Assets/png/qantas.png";
import jetstar from "../Assets/png/jetstar.png";
import CContainer from "./Common/CContainer";
import CStack from "./Common/CStack";

const brands = [alitalia, axon, expedia, qantas, jetstar];

const Brands = () => {
  return (
    <CContainer>
      <CStack
        sx={{ justifyContent: "space-between" }}
        direction={{ xs: "column", xsm: "row" }}
      >
        {brands?.map((cur, i) => {
          return <img key={i} src={cur} alt="" />;
        })}
      </CStack>
    </CContainer>
  );
};

export default Brands;
