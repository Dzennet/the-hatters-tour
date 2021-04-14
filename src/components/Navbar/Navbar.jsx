import React, { useState } from "react";
import c from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlay,
  faInstagram,
  faItunesNote,
  faVk,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobeAmericas,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import hatters_logo from "../../common/img/navbar/hatters_logo.png";
import cn from "classnames";

function Navbar() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  return (
    <nav className={c.navbar}>
      <div className={c.navbar_logo}>
        <img src={hatters_logo} alt="logo" />
      </div>
      <div className={c.navbar_content}>
        <div
          onClick={() => setIsShowNavbar(!isShowNavbar)}
          className={cn({ [c.active]: isShowNavbar }, c.navbar_burger)}
        >
          <span></span>
        </div>

        <div className={c.navbar_content_socials}>
          <a href="https://vk.com/thehatters" rel="noreferrer" target="_blank">
            {" "}
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faVk}
            />
          </a>
          <a
            href="https://www.instagram.com/thehttrs/"
            rel="noreferrer"
            target="_blank"
          >
            {""}
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faInstagram}
            />
          </a>
          <a
            href="https://www.facebook.com/TheHattersRussianBand/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faFacebook}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkaZnkZMmIg3pNmi1zRXpeQ"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faYoutube}
            />
          </a>
          <a href="https://thehatters.ru/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faGlobeAmericas}
            />
          </a>
          <a
            href="https://music.apple.com/ru/artist/the-hatters/1161703189"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faItunesNote}
            />
          </a>
          <a
            href="https://play.google.com/store/music/artist?id=A35bvt2dl72soofpvv4rrrochsy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              style={{ color: "#acacac" }}
              icon={faGooglePlay}
            />
          </a>
        </div>
        <div
          className={cn({ [c.active]: isShowNavbar }, c.navbar_content_menu)}
        >
          <div className={c.navbar_content_menu_links}>
            <div
              onClick={() => setIsShowNavbar(false)}
              className={c.navbar_content_menu_link}
            >
              <NavLink to="/">HATTERS ТУР</NavLink>
            </div>
            <div
              onClick={() => setIsShowNavbar(false)}
              className={c.navbar_content_menu_link}
            >
              <NavLink to="/about">О ТУРЕ</NavLink>
            </div>
            <div
              onClick={() => setIsShowNavbar(false)}
              className={c.navbar_content_menu_link}
            >
              <NavLink to="/video">ВИДЕО</NavLink>
            </div>
          </div>
          <div className={c.navbar_content_menu_buy}>
            <button className="buy_btn">
              <FontAwesomeIcon
                style={{ transform: "rotate(-12deg)", marginRight: "5px" }}
                icon={faTicketAlt}
              />
              Купить билет
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
