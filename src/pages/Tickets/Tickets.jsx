import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import Discount from "../../components/Tickets/Discount/Discount";
import Poster from "../../components/Tickets/Poster/Poster";
import TicketItem from "../../components/Tickets/TicketItem/TicketItem";
import c from "./Tickets.module.css";

function Tickets(props) {
  let Ticket = props.ticketsData.map((ticket) => (
    <TicketItem
      date={ticket.date}
      city={ticket.city}
      location={ticket.location}
      key={ticket.id}
    />
  ));

  return (
    <>
      <Poster />
      <section className={c.tickets}>
        <h2>Даты тура</h2>
        <h1>The Hatters Tour</h1>
        {Ticket}
      </section>
      <section className={c.tour_video}>
        <h2>Тур THE HATTERS</h2>
        <div className={c.tour_video_play}>
          <iframe
            width="100%"
            height="562"
            src="https://www.youtube.com/embed/SI0F54fjxyg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <AboutSection />
      <Discount />
    </>
  );
}

export default Tickets;
