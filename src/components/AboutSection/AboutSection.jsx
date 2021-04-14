import React from "react";
import c from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={c.about_group}>
      <div className={c.about_group_headers}>
        <h3>О туре</h3>
        <h2>The Hatters Tour</h2>
      </div>
      <div className={c.about_group_image}>
        <img
          src="https://hatters.live/upload/resize_cache/iblock/d56/1124_578_1/d56849f8441d20de120057c5d089d8b7.jpg"
          alt="..."
        />
      </div>
      <div className={c.about_group_description}>
        <p>
          HATTERS появились на музыкальной сцене не так давно, но сразу же
          привлекли к себе самое пристальное внимание! Группа была основана в
          культурной столице России - Санкт-Петербурге. Каждый концерт HATTERS -
          это нечто особенное. Группа постоянно привносит новые идеи в свои
          выступления, находится в постоянном контакте с аудиторией и неизменно
          "взрывает" танцпол!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
