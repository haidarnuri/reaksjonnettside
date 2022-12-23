import React, { useState } from "react";
import thumbUpImage from "./../../ReactionImages/thumbsemoji.png";
import psychosmiley from "./../../ReactionImages/psychosmiley.png";
import gorillaImage from "./../../ReactionImages/gorillaImage.jpg";

export default function Mainpage() {
  const [thumbClicked, setThumbClicked] = useState(0);
  const [psychosmileyClicked, setPsychosmileyClicked] = useState(0);
  const [gorillaClicked, setGorillaClicked] = useState(0);

  return (
    <div>
      <div className="headerWrapper">
        <h1>Velkommen .......</h1>
        <p>Trykk på en av reaksjonene under: </p>
      </div>

      <div className="reactionImagesWrapper">
        <div className="reactionImages">
          <img
            src={thumbUpImage}
            alt="thumb"
            onClick={() => setThumbClicked(thumbClicked + 1)}
          />
          <p>clicks: {thumbClicked}</p>
        </div>
        <div className="reactionImages">
          <img
            src={psychosmiley}
            alt="psychosmiley"
            onClick={() => setPsychosmileyClicked(psychosmileyClicked + 1)}
          />
          <p>clicks: {psychosmileyClicked}</p>
        </div>
        <div className="reactionImages">
          <img
            src={gorillaImage}
            alt="gorillaImage"
            onClick={() => setGorillaClicked(gorillaClicked + 1)}
          />
          <p>clicks: {gorillaClicked}</p>
        </div>
      </div>
    </div>
  );
}
