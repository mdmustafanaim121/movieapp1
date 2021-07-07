import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import movieDetails from "../component/movieDetails";
import pageNotFound from "../component/pageNotFound";
import TicketPage from "../component/ticketPage";
import latestMovieContainer from "../containers/latestMovieContainer";
import NearbyEventsContainer from "../containers/NearbyEventsContainer";
import UpcomingMovieContainer from "../containers/UpcomingMovieContainer";
export default function Routing() {
  return (
    <Router>
      <Navbar bg="primary" variant='dark' expand="lg">
        <Navbar.Brand href="/">Ultra Cinemas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Latest Movies</Nav.Link>
            <Nav.Link href="/upcomingmovies">Upcoming Movies</Nav.Link>
            <Nav.Link href="/events">Nearby Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
      <Route exact path="/" component={latestMovieContainer} />
      <Route exact path="/ticketDetails" component={TicketPage} />
      <Route exact path="/details" component={movieDetails} />
      <Route exact path="/upcomingmovies" component={UpcomingMovieContainer} />
      <Route exact path="/events" component={NearbyEventsContainer} />
      <Route component={pageNotFound}/>
      </Switch>
    </Router>
  );
}
