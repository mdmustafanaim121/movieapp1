import React from "react";
import renderer from "react-test-renderer";
import NearbyEvents from "../../component/nearbyEvents";

describe("Testing Nearby Events component", () => {
  test("initial Snapshot", () => {
    const movies = [
      {
        name: "Black Panther",
        language: "ENGLISH",
        rate: 4.5,
        type: "Action Adventure Fantasy",
        imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
      },
      {
        name: "Black Cat",
        language: "ENGLISH",
        rate: 4.5,
        type: "Action Adventure Fantasy",
        imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
      },
    ];
    const isLoading = false;
    const error = "";
    const history = window.history;

    const test1 = renderer
      .create(
        <NearbyEvents
          movies={movies}
          loading={isLoading}
          history={history}
          error={error}
        />
      )
      .toJSON();
    expect(test1).toMatchSnapshot();
  });

  test("expect error message", () => {
    const isLoading = false;
    const error = {
      message: "404 url not found",
    };
    const history = window.history;
    const movies = null;
    const result = renderer
      .create(
        <NearbyEvents
          loading={isLoading}
          error={error}
          history={history}
          movies={movies}
        />
      )
      .toJSON();
    expect(result.children[3]).toBe("404 url not found");
  });

  test("expect loading", () => {
    const isLoading = true;
    const error = "";
    const history = window.history;
    const movies = null;
    const result = renderer
      .create(
        <NearbyEvents
          loading={isLoading}
          error={error}
          history={history}
          movies={movies}
        />
      )
      .toJSON();
    expect(result.props.className).toBe("loading");
  });
});
