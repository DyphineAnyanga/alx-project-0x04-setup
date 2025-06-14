// components/layouts/Header.tsx
import React from "react";
import { ButtonProps } from "@/interface";
import Button from "../common/Button"; // Ensure Button is a **default export**

const Header = () => {
  const handleClick = () => {
    console.log("Header button clicked");
  };

  const buttonProps: ButtonProps = {
    buttonLabel: "Click Me",
    buttonBackgroundColor: "blue",
    action: handleClick,
  };

  return (
    <header className="header">
      <h1>Welcome to My Site</h1>
      <Button {...buttonProps} />
    </header>
  );
};

export default Header;
