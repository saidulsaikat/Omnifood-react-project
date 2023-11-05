import React from "react";
import classes from "./Hero.module.css";
import heroImage from "../../assets/hero.png";
import customer1 from "../../assets/customers/customer-1.jpg";
import customer2 from "../../assets/customers/customer-2.jpg";
import customer3 from "../../assets/customers/customer-3.jpg";
import customer4 from "../../assets/customers/customer-4.jpg";
import customer5 from "../../assets/customers/customer-5.jpg";
import customer6 from "../../assets/customers/customer-6.jpg";

const Hero = () => {
  return (
    <React.Fragment>
      <section className={classes["section-hero"]}>
        <div className={classes.hero}>
          <div className={classes["hero-text-box"]}>
            <h1 className={classes["heading-primary"]}>
              A healthy meal delivered to your door, every single day
            </h1>
            <p className={classes["hero-description"]}>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#" className={`${classes.btn} ${classes["btn--full"]}`}>
              Start eating well
            </a>
            <a href="#" className={`${classes.btn} ${classes["btn--outline"]}`}>
              Learn more &darr;
            </a>
            <div className={classes["delivered-meals"]}>
              <div className={classes["delivered-images"]}>
                <img src={customer1} alt="Customer photo" />
                <img src={customer2} alt="Customer photo" />
                <img src={customer3} alt="Customer photo" />
                <img src={customer4} alt="Customer photo" />
                <img src={customer5} alt="Customer photo" />
                <img src={customer6} alt="Customer photo" />
              </div>
              <p className={classes["delivered-text"]}>
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className={classes["hero-img-box"]}>
            <img
              src={heroImage}
              className={classes["hero-img"]}
              alt="a lady eating"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
