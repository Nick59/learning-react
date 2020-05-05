import React from "react";

const TimelineCard = () => {
    return (<div className="timeline-container-global" id="post-id-85" data-id="85" data-date="2019-01-03">
    <div className="cd-timeline__block js-cd-block">
      <div className="cd-timeline__img js-cd-img uk-text-center uk-scrollspy-inview uk-animation-scale-down" uk-scrollspy="cls:uk-animation-scale-down">
        <i className="fas fa-pencil-alt uk-position-center img"/>
      </div>

      <div className="cd-timeline__content arrow-block js-cd-content uk-scrollspy-inview uk-animation-slide-right-medium" uk-scrollspy="cls:uk-animation-slide-right-medium">
        <a className="cd-timeline__close btn btn-primary remove-to-fullscreen">
          <i className="fa fa-times"/>
          close
        </a>
        <div className="timeline-post-show uk-margin-bottom">
          <div className="timeline-row uk-box-shadow-medium uk-flex">
            <div className="timeline-text uk-padding-small cd-timeline__widget uk-width-2-3">
              <div className="timeline-text-title">
                <div className="uk-flex">
                  <div className="uk-width-1-2 uk-text-left">
                    <h2>Test</h2>
                  </div>

                  <div className="uk-width-1-2 uk-text-right">
                    <button className="btn btn-default" data-toggle="modal" data-target="#share-modal">
                      <i className="fa fa-share-alt" uk-tooltip="Share" title="" aria-expanded="false"/>
                    </button>
                  </div>
                </div>
              </div>

              <div className="description text-justify">
                <div className="form-group">
                  <div className="editor"/>
                  <a className="cd-timeline__read-more btn btn-primary set-to-fullscreen">
                    <i className="fa fa-align-justify"/>
                    read_more
                  </a>
                </div>

                <div className="uk-width-1-3">
                  <div className="uk-flex uk-flex-column">
                    <div className="cd-timeline__widget uk-width last-item post-map-full-height">
                      <div className="single-marker-map">
                        <input type="hidden" className="location" data-lat="37.7648" data-lng="-122.463" data-location-name="San Francisco"/>
                        <div className="uk-width map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"/>

                        <div className="row row-no-gutter uk-box-shadow-medium uk-margin-bottom">
                          <div className="timeline-images timeline-widget">
                            <div className="uk-width uk-margin-bottom">
                              <input type="hidden" className="grid-gallery-row-height" value="125"/>
                              <div className="grid-gallery justified-gallery">
                                <a className="box jg-entry entry-visible" href="http://web.worldtravelers/media/cache/large_image/media/4/3/6/5e8f35a722040_trip-map.png">
                                  <img alt="World Travelers - San Francisco-  image 1" src="http://web.worldtravelers/media/cache/thumbnails/media/4/3/6/5e8f35a722040_trip-map.png"/>
                                  <div className="caption">
                                    World Travelers - San Francisco- image 1
                                  </div>
                                </a>
                                <a className="box jg-entry entry-visible" href="http://web.worldtravelers/media/cache/large_image/media/4/3/6/5e8f37e14fafc_trip-map.png">
                                  <img alt="World Travelers - San Francisco-  image 2" src="http://web.worldtravelers/media/cache/thumbnails/media/4/3/6/5e8f37e14fafc_trip-map.png"/>
                                  <div className="caption">
                                    World Travelers - San Francisco- image 2
                                  </div>
                                </a>
                                <a className="box jg-entry entry-visible" href="http://web.worldtravelers/media/cache/large_image/media/4/3/6/5e8f3822ce05f_mymerrys-2.png">
                                  <img alt="World Travelers - San Francisco-  image 3" src="http://web.worldtravelers/media/cache/thumbnails/media/4/3/6/5e8f3822ce05f_mymerrys-2.png"/>
                                  <div className="caption">
                                    World Travelers - San Francisco- image 3
                                  </div>
                                </a>
                                <a className="box jg-entry entry-visible" href="http://web.worldtravelers/media/cache/large_image/media/4/3/6/5e8f3868df462_mymerrys-1.png">
                                  <img alt="World Travelers - San Francisco-  image 4" src="http://web.worldtravelers/media/cache/thumbnails/media/4/3/6/5e8f3868df462_mymerrys-1.png"/>
                                  <div className="caption">
                                    World Travelers - San Francisco- image 4
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="comment-container" data-url="/comments/type/post/entity/85/"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default TimelineCard;
