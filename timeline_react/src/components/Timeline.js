import React from "react";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
    return (<section class="cd-timeline js-cd-timeline timeline">
    <div class="uk-container">
      <div class="cd-timeline__container">
        <div class="grid-gallery">
          <div class="timeline-date-block">
            <div class="uk-width-1-3 uk-align-center uk-padding-small uk-margin-medium-top" uk-scrollspy="cls:uk-animation-scale-down">
              Date Ajourd'hui
            </div>
          </div>
        </div>
      </div>
      <div class="cd-timeline__container">
        <TimelineCard/>
      </div>
    </div>
  </section>);
};

export default Timeline;
