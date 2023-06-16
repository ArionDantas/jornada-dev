import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@ArionDantas</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooter__container">
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Títula da música</p>
          </div>
        </div>
          <img
            className="videoFooter__record"
            alt="Imagem de um vinil girando"
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
