import React from "react";
import { useState } from "react";
import "./Cards.css";

function Cards({ el }) {
  let [val, setVal] = useState(el.count);
  if (val < 1) {
    val = 1;
  }
  return (
    <>
      <div key={el.id} className="box">
        <img src={el.url} alt={el.module} />
        <div className="texts">
          <h3>{el.name}</h3>
          <div className="elipsis">
            <p>{el.module}</p>
          </div>
          <span className="sp">
            size-{el.size}, price-{el.price}$
          </span>
        </div>
        <div className="count">
          <button
            className="button-64"
            role="button"
            onClick={() => {
              setVal((val) => (val -= 1));
              console.log();
            }}
          >
            <span class="text">-</span>
          </button>
          <span>{val}</span>
          <button
            className="button-64"
            role="button"
            onClick={() => {
              setVal((val) => (val += 1));
            }}
          >
            <span class="text">+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export { Cards };
