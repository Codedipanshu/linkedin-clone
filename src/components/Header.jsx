import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/linkedin_original_logo_icon_146435.png"
          alt="linkedin logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={SupervisorAccountIcon} title={"My Natwork"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption avatar={"https://media.licdn.com/dms/image/C4D03AQHACRKtDRxscg/profile-displayphoto-shrink_400_400/0/1651317042594?e=1710374400&v=beta&t=HgpAaybMALxqp9j7ZPPWVfPgptWeGxv9fLpQ4gMe6pg"} title={"Me"} />
      </div>
    </div>
  );
};

export default Header;
