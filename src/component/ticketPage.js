import React from "react";
import ParticlesBg from "particles-bg";
import QRCode from "qrcode.react";
import "../style/style.css";

function TicketPage(props) {
  const ticketData = props.ticketData ? props.ticketData : JSON.parse(window.localStorage.getItem("ticket"));
  const data = props.data ? props.data : JSON.parse(window.localStorage.getItem("data"));
  const ticketQR =
    data.imageUrl +
    "\n" +
    "Movie Name: " +
    data.name +
    "\n" +
    "Date: " +
    ticketData.date +
    "\n" +
    "Time:" +
    ticketData.time +
    "\n" +
    "Seats: " +
    ticketData.seat;

  return (
    <div className="tpHeight">
      <ParticlesBg type="fountain" bg={true} />

      <div className="md1">
        <div className="tpCardLeft">
          <QRCode value={ticketQR} size='300' />
          <br />
          <h3 className="tpBg"> Scan the QR Code using your mobile device</h3>
        </div>
        <div className="tpStyle">
          <div className="tpStyle2"></div>
        </div>
        <div className="tpStyle3">
          <img className="mdImage1" alt="Movie" src={data.imageUrl} />
          <h2 className="mdText">{data.name}</h2>
          {/* <br /> */}
          <h3 className="mdcardText1">Date: {ticketData.date}</h3>
          <h3 className="mdcardText1">Time: {ticketData.time}</h3>
          <h3 className="mdcardText1">No of Seats: {ticketData.seat}</h3>
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
