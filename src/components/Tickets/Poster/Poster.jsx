import React from "react";
import c from "../../../pages/Tickets/Tickets.module.css";
import poster from "../../../common/img/tickets/hatters_poster.png";

function Poster() {
  return (
    <section className={c.poster}>
      <img src={poster} alt="The Hatters" />
    </section>
  );
}

export default Poster;
