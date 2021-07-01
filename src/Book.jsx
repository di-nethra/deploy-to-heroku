import React from "react";
import "./styles.css";

function Book(props) {
  console.log(props);
  return (
    <div className="book">
      <img src={props.src} alt="60" className="img" />
      <h3 className="title">{props.title}</h3>
      <h4>{props.author}</h4>
    </div>
  );
}

export default Book;
