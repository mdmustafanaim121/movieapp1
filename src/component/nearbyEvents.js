import React from "react";
import ParticlesBg from "particles-bg";
import Carousel from "react-elastic-carousel";
import loadingImage from "../image/loading.gif";
import errorImage from "../image/error.gif";

export default function NearbyEvents(props) {
  const { data, loading, error } = props;

  if (loading) {
    return (
      <div className="loading">
        <img src={loadingImage} alt="loading..." />
      </div>
    );
  } else if (error) {
    return (
      <div className="loading">
        <img src={errorImage} alt="Error..." />
        <br />
        Encountered an error: {error.message}
      </div>
    );
  } else {
    return (
      <div>
        <ParticlesBg type="polygon" bg={true} />
        <h1 className="heading1">Nearby Events</h1>

        <div className="d1">
          <Carousel enableAutoPlay enableMouseSwipe={false}>
            {data &&
              data.map((movie, key) => (
                <div key={key}>
                  <img className="img1" alt="Movie" src={movie.imageUrl} />
                  <h2 className="header2">{movie.name}</h2>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
