import React from "react";

const TimelineCard = () => {
    const [fullsScreen, setFullScreen] = React.useState(false);

    const classes = fullsScreen ?
        "cd-timeline__content arrow-block js-cd-content fullscreen-mode" :
        "cd-timeline__content arrow-block js-cd-content";

    return (<div className="timeline-container-global" id="post-id-" data-id="" data-date="date">
    <div className="cd-timeline__block js-cd-block">
      <div className="cd-timeline__img cd-timeline__img js-cd-img uk-text-center" uk-scrollspy="cls:uk-animation-scale-down">
        <i className="fas fa-pencil-alt uk-position-center img"/>
      </div>

      <div className={classes} uk-scrollspy="cls:uk-animation-slide-right-medium">
        <a className="cd-timeline__close uk-button uk-button-primary remove-to-fullscreen" onClick={() => setFullScreen(false)}>
          <i className="fa fa-times"/>
          close
        </a>

        <div className="timeline-post-show uk-margin-bottom">
          <div className="timeline-row  uk-box-shadow-medium uk-flex uk-margin-bottom">
            <div className="timeline-text uk-padding-small cd-timeline__widget uk-width-2-3">
              <div className="timeline-text-title">
                <div className="uk-flex">
                  <div className="uk-width-1-2 uk-text-left">
                    <h2>Post Name</h2>
                  </div>
                  <div className="uk-width-1-2 uk-text-right">
                    <button className="uk-button uk-button-default" data-toggle="modal" data-target="#share-modal">
                      <i className="fa fa-share-alt" uk-tooltip="Share"/>
                    </button>
                  </div>
                </div>
              </div>

              <div className="description text-justify">
                Ceci est un texte
              </div>

              <a className="cd-timeline__read-more uk-button uk-button-primary set-to-fullscreen" onClick={() => setFullScreen(true)}>
                <i className="fa fa-align-justify"/>Read more
              </a>
            </div>

            <div className="uk-width-1-3">
              <div className="uk-flex uk-flex-column">
                <div className="cd-timeline__widget uk-width">
                  <div className="weather-box">
                    <div className="weather card">
                      <div className="city-selected">
                        <article>
                          <div className="info">
                            <div className="temp">32°</div>
                          </div>

                          <div className="icon">
                            <img src="http://web.worldtravelers/images/cloud.png" alt="cloud"/>
                          </div>
                        </article>

                        <div className="moisture">
                          <i className="fa fa-info-circle"/>
                          <small>Season: summer / very moist</small>
                        </div>

                        <div className="advice">
                          <div className="content">
                            <i className="fa fa-comment"/>
                            Take a umbrella
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-no-gutter uk-box-shadow-medium uk-margin-bottom">
            <div className="timeline-images timeline-widget">
              <img src="http://lorempixel.com/400/200"/>
              <img src="http://lorempixel.com/400/200"/>
              <img src="http://lorempixel.com/400/200"/>
              <img src="http://lorempixel.com/400/200"/>
              <img src="http://lorempixel.com/400/200"/>
              <img src="http://lorempixel.com/400/200"/>
              <img src="http://lorempixel.com/400/200"/>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
  </div>);
};

export default TimelineCard;
