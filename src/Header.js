import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      
      <div class="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
       <HeaderOption Icon={HomeIcon} title='Home'/>
       <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
       <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
       <HeaderOption Icon={ChatIcon} title='messaging'/>
       <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
       <HeaderOption avatar="https://lh3.googleusercontent.com/QixAo1_Fh9viBaiIbHjkVJ24fU4FFDDkKSLTuqbfghNqdycjY5Z8iII6WRji09BvbzllCDHBAdw5qib2Iz3o_Lxh2Ev_RgfnlC9lkgLm7zgp9oc2yPdQ4rBHHYZBUZvnAF8j0GWro0CRRnAWmZI0VH8Fi7hFbJxRdO7zIsRK4oFjKLCf281RPbTTZFQo2yxIYKtrr6b5cSs64sLXB4APvI9gXwDQ--ljn813gH777gyP3RlfSI4Q1Izx5bU5T5hb8WAuo8jP8pPRVJgMLl8Lm5saUyICIERXXtX9iG1y8KZMrRXm-CLCJXx_GQdzXvNjNHNDfRh2RE6HBbKj3IO_unOQeiC_d6z8DT-7ojSsE3Yg72TJcYQzkN1p_9WpkqrUpXA0ewuAQe5EuzXdSHBh1qSV-WZkP8_1Xg_L1QvQw-LfkzFCcC2hBRiz2are2dL1_kMIbSSqNuh467wQSuNo5vTglw5aWppqXvZ88rgGduWzJoMgrPXciPC-euKVZfhUua8A9WMgNATMmC9zafLNnTabfRemaMpx2a5G-qHhoJvA1xoTJuwQ9D8wfaDH4XWXhAF0F8FFf6nW6HWEL9_Ggd8t7TUv6jT0Djo-mtj1sdTaxC0vhgp4LDMS7sCEI_9R4RaOeT_Fx_c3O8m43MKR_rbAapz0OesleN5cWKXvsSvx7vV-FfHS9f36uloAwIHPXUHnQXfFFC1wiRfH7SPWgJi5D8emHZDCQDuyUqGrmCQQ6Wn95CtxdXcdDgGyUEBTvOft0iPENnBu2La50qZoC3JB5bhRGHinahc4sIuiL079JdXeU7dqXwLm3U_GwlawmbxX_FVNg5NS6ZlTKPQtywwWOLjJAhP24D9Pw40cWoA-Xtc81AhBtXLE7Gkd1mu2RFhC2NHmo5KbE95yxC71bYZjehpLZ2E2pJ2v90UPKykNWWFV=w739-h985-no?authuser=0" title="me"/>
      </div>
    </div>
  );
}

export default Header;
