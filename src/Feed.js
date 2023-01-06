import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
             
             
              type="text"
            />
            <button type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
      <Posts
        name="Cassius Colaco"
        description="This is a test"
        message="Wow this works"
        photoUrl=""
      />
      <Posts
        name="Elon musk"
        description="Dz9-000"
        message="nuke mars"
        photoUrl=""
      />
      <Posts
        name="Mr Beast"
        description="philantrophy"
        message="If elon dies can i have twitter"
        photoUrl=""
      />
      <Posts
        name="Cassius Colaco"
        description="This is a test"
        message="Wow this works"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
