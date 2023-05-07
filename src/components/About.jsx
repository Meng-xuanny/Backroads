import React from "react";
import customer from "../images/customer.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subtitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={customer} className="about-photo" alt="customer" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Lulu Vending, our mission is to provide our customers with
            convenient access to a variety of high-quality snacks and beverages,
            while delivering exceptional customer service and reliability.
            <p>
              Our machines are state-of-the-art and feature the latest in
              vending machine technology. Each machine is equipped with an
              intuitive touchscreen interface that makes it easy to browse our
              selection of products and make a purchase. Our machines are also
              equipped with advanced payment systems, including cash, credit
              card, and mobile payment options, so you can pay with your
              preferred method.
            </p>
            <p>
              Contact us today to learn more about our vending machine services
              and how we can help meet your needs.
            </p>
          </p>

          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
