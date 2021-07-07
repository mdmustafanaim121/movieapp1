import React from "react";
import Rating from "react-rating";
import star from "../image/star-yellow.png";
import starGrey from "../image/star-grey.png";
import {
  Button,
  Modal,
  Dropdown,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import "../style/style.css";

export default function movieDetails(props) {
  const{history}=props;
  const [displayBooking, setBooking] = useState(false);
  const data = props.data ? props.data : JSON.parse( window.localStorage.getItem("data")) ;

  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} />
      {data ? (
        <div className="md1">
          <div className="mdcard">
            <img className="mdImage1" alt="Movie" src={data.imageUrl} />
          </div>
          <div className="mdcardText">
            <h2 className="mdText">{data.name}</h2>
            <h3 className="mdcardText1">{data.language}</h3>
            <h3 className="mdcardText1">2hrs and 40 min</h3>
            <h3 className="mdcardText1">{data.type}</h3>
            <Rating
              readonly={true}
              placeholderRating={data.rate}
              emptySymbol={<img src={starGrey} alt="Movie" className="mdRating" />}
              placeholderSymbol={
                <img src={star} alt="Movie" className="mdRating" />
              }
            />
            <br />
            <div className="mdpara1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <span className="mdButton">
              <Button
                variant="info"
                size="lg"
                block
                onClick={() => setBooking(true)}
              >
                Book Now
              </Button>
            </span>
          </div>
          <BookTicket
            show={displayBooking}
            onHide={() => setBooking(false)}
            data={data}
            history={history}
          />
        </div>
      ) : (
        <h2 className="mdStyle3"> Please select a movie to view it's details ! </h2>
      )}
    </div>
  );
}

function BookTicket(props) {
  const [seats, setseats] = useState("No of Seats");
  const [time, settime] = useState("");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mdRow">
          <div className="mdRow">
            <img className="mdImage2" alt="Movie" src={props.data.imageUrl} />
          </div>
          <div className="mdCol1">
            <div className="mdRow">
              <div className="mdCol2">
                <h3>Date</h3>
              </div>
              <div className="mdCol3">
                <input type="date" name="date" id="ticketDate" />
              </div>
            </div>
            <br />
            <div className="mdRow">
              <div className="mdCol2">
                <h3>Timings</h3>
              </div>

              <div className="mdCol4">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  value={time}
                  onChange={(value) => {
                    settime(value);
                  }}
                >
                  <ToggleButton value={"4:00 pm"} variant="secondary">
                    4:00 pm
                  </ToggleButton>
                  <ToggleButton value={"7:30 pm"} variant="secondary">
                    7:30 pm
                  </ToggleButton>
                  <ToggleButton value={"9:45 pm"} variant="secondary">
                    9:45 pm
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
            <br />

            <div className="mdRow">
              <div className="mdCol2">
                <h3 className="mdStyle">Seats</h3>
              </div>
              <div className="mdCol2">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {seats}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setseats("1");
                      }}
                    >
                      1
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setseats("2");
                      }}
                    >
                      2
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setseats("3");
                      }}
                    >
                      3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="mdStyle1">
              <Button variant="success" block onClick={() => submitData()}>
                Book Ticket
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  function submitData() {
    const ticket = {
      seat: seats,
      time: time,
      date: document.getElementById("ticketDate").value,
    };
    window.localStorage.setItem("ticket", JSON.stringify(ticket));
    props.history.push("ticketDetails", ticket);
  }
}
