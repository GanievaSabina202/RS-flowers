import React, { useState } from "react";
import {
  Headers,
  Logo,
  HeaderList,
  HeaderListWeb,
  Img,
  Hreff,
  DensityMediumIcons,
} from "./Header.styled";

export default function Header() {
  const [Navbar, setNavbar] = useState(false);

  return (
    <>
      <Headers>
        <Logo href="/">
          <Img src="/images/logo.png" alt="nsb" />
          <DensityMediumIcons
            onClick={() => {
              setNavbar(!Navbar);
            }}
          />
        </Logo>
        <HeaderListWeb>
          <Hreff href="/">Home</Hreff>
          <Hreff href="/gallery">Gallery</Hreff>
          <Hreff href="/aboutus">About Us</Hreff>
          <Hreff href="/our-team">Our Team</Hreff>
          <Hreff href="/contact-us">Contact Us</Hreff>
          <Hreff href="/basket">Basket</Hreff>
        </HeaderListWeb>
        {Navbar && (
          <HeaderList>
            <Hreff href="/">Home</Hreff>
            <Hreff href="/">Gallery</Hreff>
            <Hreff href="/">About Us</Hreff>
            <Hreff href="/">Our Team</Hreff>
            <Hreff href="/">Contact Us</Hreff>
            <Hreff href="/basket">Basket</Hreff>
          </HeaderList>
        )}
      </Headers>
    </>
  );
}
