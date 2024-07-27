import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={` ${layout.sectionReverse} p-6`}>
      <div className={layout.sectionImgReverse} data-aos="zoom-in">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} data-aos="fade-down-right">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Effortlessly take full control of your billing and invoicing processes
          with our comprehensive and user-friendly solution, designed to
          streamline your financial management, reduce errors, and save you
          valuable time. Our intuitive interface ensures that you can manage all
          aspects of your billing and invoicing with ease, enhancing your
          productivity and allowing you to focus on what truly matters—growing
          your business.
        </p>
        <div
          data-aos="zoom-in"
          className="flex flex-row flex-wrap sm:mt-10 mt-6"
        >
          <img
            src={apple}
            alt="app-store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google-play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
