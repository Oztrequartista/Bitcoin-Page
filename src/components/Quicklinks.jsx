import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { Container } from "react-bootstrap";
import "./quicklinks.css";

const Quicklinks = () => {
  return (
    <Container className="quick-links">
      <ul>
        <li>
          <ShareIcon className="fa fa-share-alt"></ShareIcon>
          <p>SHARE TO</p>
        </li>
        <li>
          <AnnouncementIcon className="fa fa-audio-description"></AnnouncementIcon>
          <p>RECENT NEWS</p>
        </li>
        <li>
          <AssessmentIcon className="fa fa-cog"></AssessmentIcon>
          <p>ANALYTICS</p>
        </li>
        <li>
          <MonetizationOnIcon className="fa fa-btc"></MonetizationOnIcon>
          <p>WALLET</p>
        </li>
      </ul>
    </Container>
  );
};

export default Quicklinks;
