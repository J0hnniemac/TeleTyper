import React, { useState, useEffect } from "react";
import "./TeleTyper.css";

const TeleTyper = (props) => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(-1);
  let characterDelay = 90;
  if(props.characterDelay>0)
  {
    characterDelay = props.characterDelay;
  }
  const clickTeleText = () => {
    if (textIndex <= props.text.length) {
      setTextIndex((textIndex) => props.text.length);
      setText(props.text.substring(0, textIndex));
    } else
    {
      console.log("You clicked the text - calling props.clickHandler");
      props.teleTypeClickHandler();
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (textIndex <= props.text.length) {
        setTextIndex((textIndex) => textIndex + 1);
        setText(props.text.substring(0, textIndex));
      }
    }, characterDelay);
  });
  return <div className="teletyper" onClick={clickTeleText}>{text}</div>;
};

export default TeleTyper;
