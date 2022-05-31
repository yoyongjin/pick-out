import React from "react";
import Ads from "../Ads";
import Navigation from "../Navigation";
import ModalTab from "../UI/ModalTab";

const Header = () => {
  return (
    <>
      <Navigation />
      <Ads />
      <ModalTab />
    </>
  );
};

export default Header;
