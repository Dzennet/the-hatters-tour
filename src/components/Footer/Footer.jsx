import React from "react";
import c from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlay,
  faInstagram,
  faItunesNote,
  faVk,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className={c.footer}>
      <div className={c.footer_menu}>
        <h2>Карта сайта</h2>
        <div className={c.footer_menu_links}>
          <div className={c.footer_menu_link}>
            <NavLink to="/">HATTERS ТУР</NavLink>
          </div>
          <div className={c.footer_menu_link}>
            <NavLink to="#">О ТУРЕ</NavLink>
          </div>
          <div className={c.footer_menu_link}>
            <NavLink to="/video">ВИДЕО</NavLink>
          </div>
        </div>
      </div>
      <div className={c.footer_socials}>
        <h2>Соц. сети</h2>
        <div className={c.footer_socials_icons}>
          <a href="https://vk.com/thehatters" rel="noreferrer" target="_blank">
            {" "}
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#3a3a3a" }}
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
              size="2x"
              style={{ color: "#3a3a3a" }}
              icon={faInstagram}
            />
          </a>
          <a
            href="https://www.facebook.com/TheHattersRussianBand/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#3a3a3a" }}
              icon={faFacebook}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkaZnkZMmIg3pNmi1zRXpeQ"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#3a3a3a" }}
              icon={faYoutube}
            />
          </a>
          <a href="https://thehatters.ru/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#3a3a3a" }}
              icon={faGlobeAmericas}
            />
          </a>
          <a
            href="https://music.apple.com/ru/artist/the-hatters/1161703189"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#3a3a3a" }}
              icon={faItunesNote}
            />
          </a>
          <a
            href="https://play.google.com/store/music/artist?id=A35bvt2dl72soofpvv4rrrochsy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              style={{ color: "#3a3a3a" }}
              icon={faGooglePlay}
            />
          </a>
        </div>
      </div>
      <div className={c.footer_mailing}>
        <h2>Рассылка</h2>
        <input className={c.footer_mailing_input} type="text" placeholder="Ваше имя" />
        <input className={c.footer_mailing_input} type="text" placeholder="Город" />
        <input className={c.footer_mailing_input} type="text" placeholder="E-mail" />
        <button>Подписаться</button>
      </div>
    </footer>
  );
}

export default Footer;
