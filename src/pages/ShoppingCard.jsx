import React from "react";
import { useState } from "react";
import { Cards } from "./Cards";

function ShoppingCard({ shop }) {
  return (
    <div className="cont">
      {shop
        ? shop.map((el) => {
            el.count += 1;
            return (
              <>
                <Cards el={el} />
              </>
            );
          })
        : null}
    </div>
  );
}

export { ShoppingCard };
