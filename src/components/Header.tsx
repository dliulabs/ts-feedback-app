import React from "react";
import { readBuilderProgram } from "typescript";

interface HeaderProps {
  text?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ text, children }) => {
  const headerStyles = { backgroundColor: "rgba(0,0,0,0.4)", color: "#ff6a95" };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
        <p>{children}</p>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
};

/*
import PropTypes from "prop-types"
Header.propTypes = {
  text: PropTypes.string,
};
*/

export default Header;
