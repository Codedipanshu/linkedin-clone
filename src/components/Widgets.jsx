import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Epic’s Fortnite",
        "New browser engines show cracks in Apple walled garden"
      )}
      {newsArticle(
        "Nintendo Switching things up",
        "Leaks suggest larger 8″ screen for next-gen console"
      )}
      {newsArticle(
        "Reddit is free education",
        "9 subreddits that can be your best teachers"
      )}
    </div>
  );
};

export default Widgets;
