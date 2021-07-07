import { render } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "../../component/movieDetails";

describe("Testing Movies Details component", () => {
  const movies = {
    name: "Black Panther",
    language: "ENGLISH",
    rate: 4.5,
    type: "Action Adventure Fantasy",
    imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
  };
  test("Movie Details snapshot", () => {
    const result = renderer
      .create(<MovieDetails history={history} data={movies} />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
