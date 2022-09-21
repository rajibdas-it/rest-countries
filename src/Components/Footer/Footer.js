import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-success text-opacity-75 text-center p-5 mt-5">
      <h3 class="fs-1 text-opacity-100 fst-italic text-success fw-bold">
        Country Info
      </h3>
      <p class="etutor-text">Gulshan, Dhaka, Bangladesh</p>
      <p class="etutor-text">Privacy Policy | Terms of use</p>
      <div class="social-media-icon ">
        <a
          class="text-decoration-none me-4 text-white social-icon"
          href="https://www.facebook.com/rajibrad/"
          target="_blank"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          class="text-decoration-none me-4 text-white social-icon"
          href="https://twitter.com/Rajibrad"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          class="text-decoration-none fw-bold text-white social-icon"
          href="https://www.linkedin.com/in/rajib-das-a032a7a7/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
