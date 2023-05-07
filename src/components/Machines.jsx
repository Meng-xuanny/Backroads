import React from "react";
import { machines } from "../data";
import Title from "./Title";

const Machines = () => {
  return (
    <section className="section" id="machines">
      <Title title="vending" subtitle="machines" />

      <div className="section-center featured-center">
        {machines.map(({ id, image, price, title, info }) => (
          <article className="machine-card" key={id}>
            <div className="machine-img-container">
              <img src={image} className="machine-img" alt={title} />
              <p className="machine-date">${price}</p>
            </div>
            <div className="machine-info">
              <div className="machine-title">
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Machines;
