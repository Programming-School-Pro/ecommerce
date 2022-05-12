import React from "react";
// import Link from 'next/link';
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 PGSM Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://instagram.com/mohamed_ehab_pro">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/Programing_Pro">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com/Programming-School-Pro-Coding">
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
