import React from "react";
import { Container } from "react-bootstrap";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

import "../components/banner.css";

const Banner = () => {
  return (
    <>
      <Container className="banner">
        <div className="app-text">
          <h2>
            Software Development By DeVed <br />
            Are You Ready ?
          </h2>
          <p>
            “I'm the hero you deserve, maybe not the one you need right now. So
            they'll hunt me. Because I can take it. Because I'm not your hero.
            I'm your silent guardian, a watchful protector. Your dark knight.”
          </p>
          <div className="play-btn">
            <div className="play-btn-inner">
              <PlayArrowOutlinedIcon className="fa" />
            </div>
            <small>LEARN MORE</small>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
