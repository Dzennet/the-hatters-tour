import React, { useState } from "react";
import c from "./Video.module.css";

function VideoItem(props) {
  const [isVideoPlay, setisVideoPlay] = useState(false);

  return (
    <div className={c.video_item}>
      <iframe
        onClick={() => setisVideoPlay(true)}
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${props.src}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {isVideoPlay ? (
        <div className={c.video_player}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia maxime culpa expedita ratione enim nemo amet corrupti dolore
          ipsa.
        </div>
      ) : null}
    </div>
  );
}

function Video() {
  return (
    <section className={c.video}>
      <h2>Видео</h2>
      <div className={c.video_items}>
        <VideoItem src="O4g71xhm-3U" />
        <VideoItem src="zqviUFQ9wtI" />
        <VideoItem src="7h723mkKX7Y" />
        <VideoItem src="hwlYm918Bao" />
        <VideoItem src="OuV7RKQY1sc" />
        <VideoItem src="f7bUGLNHpd8" />
        <VideoItem src="ZT_JlqDPTHA" />
        <VideoItem src="1phe0lvmgU0" />
      </div>
    </section>
  );
}

export default Video;
