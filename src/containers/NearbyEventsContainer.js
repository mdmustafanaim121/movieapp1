import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEventsNow } from "../actions/eventsAction";
import NearbyEvents from "../component/nearbyEvents";

function NearbyEventsContainer({ getEvents, events, isLoading, error }) {
  useEffect(() => {
    localStorage.clear();
    getEvents();
  }, []);

  return <NearbyEvents data={events} loading={isLoading} error={error} />;
}

function mapStateToProps(value) {
  return {
    events: value.movies,
    isLoading: value.isLoading,
    error: value.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: function () {
      dispatch(getEventsNow());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyEventsContainer);
