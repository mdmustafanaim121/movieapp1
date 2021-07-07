import React from "react";
import renderer from "react-test-renderer";
import TicketPage from "../../component/ticketPage";

describe("Testing Ticket Page component", () => {
  test("initial Snapshot", () => {
    const movies = {
      name: "Black Panther",
      language: "ENGLISH",
      rate: 4.5,
      type: "Action Adventure Fantasy",
      imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg",
    };

    const ticket = {
      date: "2021-07-21",
      time: "7:30 pm",
      seat: "1",
    };

    const test1 = renderer
      .create(<TicketPage data={movies} ticketData={ticket} />)
      .toJSON();
    expect(test1).toMatchSnapshot();
  });
});
