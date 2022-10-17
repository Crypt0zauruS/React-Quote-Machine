import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");
  const colors = [
    "#16a085",
    "#27ae60",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const reactQuoteMachineApi = function () {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setText(response.data.content);
        setAuthor(response.data.author);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    reactQuoteMachineApi();
  }, []);

  return (
    <div className="App">
      <>
        <div id="quote-box" style={{ backgroundColor: `${color}` }}>
          <div id="text">
            <p>{text}</p>
          </div>
          <div id="author">
            <h3>{author}</h3>
          </div>
          <button id="new-quote" onClick={reactQuoteMachineApi}>
            New Quote
          </button>
          <br />
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${text}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Tweet the quote !
          </a>
        </div>
      </>
    </div>
  );
}

export default App;
