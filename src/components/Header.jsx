import React from "react";

const Header = ({ darkMode, handleToggleDarkMode }) => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
        alt=""
        aria-hidden="true"
      ></img>
      <h1>Notes</h1>
      <button
        className="button save"
        onClick={() => handleToggleDarkMode(!darkMode)}
      >
        <h4>{darkMode ? "🌙 Dark" : "💡Light"}</h4>
      </button>
    </div>
  );
};

export default Header;
