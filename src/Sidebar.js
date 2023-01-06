import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import "./App.css"

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1667493620964-5db1a9529f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
          alt="bg img"
        />
        <Avatar className="sidebar__avatar" img src="https://lh3.googleusercontent.com/P1SPf8dNAUymVvM3boMjp8FrVLtPtoDonopfiwHw3Q9KMvsjW7Uq5qosHv7IRzLGGMmOAIpfBjY1BUYyiwnDSfc6XUCryohseHRHhqjn23pu5A3NsacJpcFXd17W4G8aJlm-1_6pLfIXDjvVrFKolikIwM86LB-gvdsZ1-ta9J1KsFNm4OPy1e_tdkSU2Pmybe-Sxlv1z8Fc2OtwsFvql8xtiQ2Zk8WLBiUfXqETkY_74wxf_AlMuYte8y4NhfltGKGOb26cxxXTckzlpNTTDyHq0WC67eOSW7oBmsslez-zxtRV4cNubjcofQahwRYT7kUVWz1T2bO4ZFwislUrmvcnRGU_5fFTwDCxr8pod1Csacel0XCS06mnSSz2oYhBjwS7Rn3J-efdmpfpx1dPORt2VHw0ykUyrSPGl8AXZXbGlwtR_YwqdhQ3mxxciNUw4H4iH4yW2et2oSZaDnEO-q0e-KbOrRdz7RGVrbkJJYZjz_XFv_p68oQSj2VsIitO67pFGdt2NwfbzrAWOGn1uXsk7M6ooHdseWUrcR-BNUL0k4jI06IDa0-f_9UGfK1jSxP4ry9Pm0hVmbU8GzHc3R7M-58GSahqbIwn6QCMXFiD72uxveG6fBgn7_eO88qx3MOtl6xPvLaQXCiT_1NSWwL4OHO0a0BiERGebqifc2pWoMLi92-szJxHfhffuwxWxzr0IKhHSqeqSIGs5X2aUspu08RjgT1tMfau5q7p23WUtyN8aK7OeridvWIJmPjwZMctt3FHHz7q6KkRioPEFZJUL3GDgQrqyX0sDpDZ6nv5w3OsdorPtE06UOm6SArWpTffSKI_K7OJBSjo_vutjikTFZ-L7nvX9OPi26wsudk48yz3FQsXg5cRpcDpYSV1rppeVfsxl2Ws_M35dhAMjcq3GQZOmnXSGhJqLccjxDY8TZkS=s959-no?authuser=0" />
        
        <h2>Cassius Colaco</h2>
        <h4>cassiuscolaco7@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,534</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,444</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        
        
        {recentItem('reactjs')}
        {recentItem("programming")}
        {recentItem("softwareegineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
