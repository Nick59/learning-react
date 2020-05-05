import React from "react";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
    return (<div className="timeline">
    <div className="cd-timeline__container">
      <div className="grid-gallery">
        <div className="timeline-date-block">
          <div className="uk-width-1-3 uk-align-center uk-padding-small uk-margin-medium-top uk-scrollspy-inview uk-animation-scale-down" uk-scrollspy="cls:uk-animation-scale-down">
            January 3, 2019
          </div>
        </div>
      </div>
    </div>

    <div className="cd-timeline__container">
      <TimelineCard/>
    </div>
  </div>);
};

export default Timeline;
