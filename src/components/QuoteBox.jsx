import React from "react";
import quotes from '../quotes.json';
import { useState } from 'react'





const QuoteBox = () => {

    const colors = ["#5539A5", "#322F20", "#6A5837", "#988F2A", "#ffc75f", "#C28E70", "#90905C", "#4b4453", "#b0a8b9", "#c34a36"]


  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };
  const randomColorIndex = Math.floor(Math.random() * colors.length);

  const color = colors[randomColorIndex]

  document.body.style = `background: ${color}`;

  return (
    <div>
      <div className="App" style={{ color: color }}>
        <div className="container">
          <div className="card">
            <div className="quote-author">
              <div className="quote">
              <i class="fa-solid fa-quote-left quote-size"></i>
                <p>{quotes[index].quote}</p>
              </div>
              <div className="author">
                <p>{quotes[index].author}</p>
              </div>
              <div className="btn-cambio">
                <button
                  style={{ backgroundColor: color }}
                  onClick={changeQuote}
                >
                  <i class="fa-solid fa-shuffle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
