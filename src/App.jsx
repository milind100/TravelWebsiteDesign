import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TopDestinations from "./components/TopDestinations";
import NextTrip from "./components/NextTrip";
import Testimonials from "./components/Testimonials";

import Brands from "./components/Brands";
import SubscribePage from "./components/SubscribePage";
import Footer from "./components/Footer";
import theme from "./components/Themes/Themes";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Services />
      <TopDestinations />
      <NextTrip />
      <Testimonials />
      <Brands />
      <SubscribePage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
