import React from "react";
import c from "./TicketItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

function TicketItem(props) {
  return (
    <div className={c.ticket_item}>
      <div className={c.ticket_image}>
        <img
          src="https://sun7-8.userapi.com/impf/L-nPsbwOm7_4hcI9rO7nQuoiHW7RuMfn04BgzQ/wCXVVsaVVjE.jpg?size=1280x1280&quality=96&sign=30157263275647a4626ac20331e5ccc4&type=album"
          alt="..."
        />
      </div>
      <div className={c.ticket_date}>
        <div className={c.ticket_date_left}>
          {props.date.match(/^\d[0-9]|^[0-9]/)}
        </div>
        <div className={c.ticket_date_right}>
          <span>{props.date.match(/\D+/)}</span>
          <span>{props.date.match(/[:0-9]+$/)}</span>
        </div>
      </div>
      <div className={c.ticket_place}>
        <div className={c.ticket_place_city}>{props.city}</div>
        <div className={c.ticket_place_location}>{props.location}</div>
      </div>
      <button className="more_btn">Подробнее</button>
      <button className="buy_btn">
        <FontAwesomeIcon
          style={{ transform: "rotate(-12deg)", marginRight: "5px" }}
          icon={faTicketAlt}
        />
        Купить билет
      </button>
    </div>
  );
}

export default TicketItem;
