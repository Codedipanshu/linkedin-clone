import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
      <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/linkedin_original_logo_icon_146435.png" alt="linkedin logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        
      </div>
    </div>
  );
};

export default Header;
