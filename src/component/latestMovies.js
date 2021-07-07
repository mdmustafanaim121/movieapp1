import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";
import { Card, Button, CardGroup } from "react-bootstrap";
import ParticlesBg from "particles-bg";
import "../style/style.css";
import loadingImage from "../image/loading.gif";
import errorImage from "../image/error.gif";

function LatestMovies({ movies, history, loading, error }) {
  function onBook(item) {
    localStorage.setItem("data", JSON.stringify(item));
    return history.push("/details");
  }

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
        <ParticlesBg type="circles" bg={true} />

        <h1 className="header1">Showing Now</h1>
        <div></div>
        <div className="d1">
          <Carousel enableAutoPlay enableMouseSwipe={false}>
            {movies &&
              movies.map((movie, key) => (
                <div key={key}>
                  <img className="img1" alt="Movie" src={movie.imageUrl} />
                  <h2 className="header2">{movie.name}</h2>
                </div>
              ))}
          </Carousel>
        </div>

        <div className="header2">
          <h3>Recommended Movies</h3>
          <CardGroup>
            {movies &&
              movies.map((item, key) => {
                return (
                  <Card border="dark" key={key}>
                    <Card.Img
                      variant="top"
                      className="card1"
                      src={item.imageUrl}
                    />
                    <Card.Body border="dark">
                      <hr />
                      <Card.Title>{item.name}</Card.Title>
                      <Button variant="primary" onClick={() => onBook(item)}>
                        Book
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default LatestMovies;
