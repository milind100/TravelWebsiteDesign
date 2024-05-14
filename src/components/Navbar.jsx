import {
  Divider,
  Drawer,
  ListItem,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import CStack from "./Common/CStack";
import CTypography from "./Common/CTypography";
import CBox from "./Common/CBox";
import logoImg from "../Assets/svg/Logo.svg";
import CContainer from "./Common/CContainer";
import CButton from "./Common/CButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavButtons = ["Desitnations", "Hotels", "Flights", "Bookings"];

const Navbar = () => {
  const mobileMatches = useMediaQuery("(min-width:964px)");
  const [open, setOpen] = useState(false);
  const buttons = [
    {
      label: "Login",
      onClick: () => {},
      sx: {},
    },
    {
      label: "Sign Up",
      onClick: () => {},
      sx: {
        padding: "3px 21px",
        border: "1px solid black",
        borderRadius: "5px",
      },
    },
  ];

  return (
    <CBox
      sx={{
        pt: 6,
        position: "fixed",
        top: 0,
        background: "transparent",
        backdropFilter: "blur(2px)",
        zIndex: 100,
        display: "flex",
        width: "100vw",
      }}
    >
      <CContainer>
        <CStack justifyContent="space-between" width="100%">
          <CBox>
            <img src={logoImg} alt="" />
          </CBox>
          {mobileMatches && (
            <CStack justifyContent="space-between" gap={7} alignItems="center">
              {NavButtons.map((cur) => {
                return (
                  <MenuItem sx={{ margin: 0, padding: 0 }} key={cur}>
                    <CTypography
                      sx={{
                        fontSize: 17,
                        fontWeight: 400,
                      }}
                    >
                      {cur}
                    </CTypography>
                  </MenuItem>
                );
              })}
            </CStack>
          )}
          <CStack gap={{ xs: 2, md: 6 }}>
            {mobileMatches ? (
              buttons?.map(({ label, onClick, sx }) => {
                return (
                  <CButton
                    key={label}
                    onClick={onClick}
                    sx={{
                      fontSize: 17,
                      fontWeight: 500,
                      ...sx,
                    }}
                  >
                    {label}
                  </CButton>
                );
              })
            ) : (
              <MenuIcon onClick={() => setOpen(!open)} />
            )}
            <select
              name="lang"
              id="langs"
              style={{
                padding: 0,
                background: "transparent",
                gap: 0,
                border: "none",
                width: "40px",
                height: "20px",
              }}
            >
              <option value="En">EN</option>
              <option value="Guj">Guj</option>
              <option value="French">French</option>
            </select>
          </CStack>
        </CStack>
        {/* //for responsive menu */}
        <Drawer open={open} onClose={() => setOpen(false)}>
          <CBox sx={{ width: 250 }}>
            <ListItem sx={{ justifyContent: "center", mt: 1 }}>
              <img src={logoImg} alt="" />
            </ListItem>
            <Divider />
            {NavButtons.map((cur) => {
              return (
                <ListItem key={cur} sx={{ justifyContent: "center" }}>
                  <CTypography
                    sx={{
                      fontSize: 17,
                      fontWeight: 400,
                    }}
                  >
                    {cur}
                  </CTypography>
                </ListItem>
              );
            })}
            <Divider />
            {buttons?.map(({ label, onClick, sx }) => {
              return (
                <ListItem key={label} sx={{ justifyContent: "center" }}>
                  <CButton
                    onClick={onClick}
                    sx={{
                      fontSize: 17,
                      fontWeight: 500,
                      ...sx,
                    }}
                  >
                    {label}
                  </CButton>
                </ListItem>
              );
            })}
          </CBox>
        </Drawer>
      </CContainer>
    </CBox>
  );
};

export default Navbar;
