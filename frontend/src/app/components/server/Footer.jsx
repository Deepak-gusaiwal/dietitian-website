import React from "react";
import { Container, Logo } from "./helper";
import { FaFacebookF,FaInstagram,FaWhatsapp,FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white pt-5">
      <Container className="grid md:grid-cols-4 gap-4 py-4">
        <div className="footerBox">
          <Logo className="w-[clamp(100px,15vw,200px)] mb-2 bg-white p-2 rounded-md" />
          <p className="text-white text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            explicabo non, modi voluptatibus, nemo sed iste sapiente perferendis
            consequuntur dolor tempore in iure quae.
          </p>
        </div>
        <div className="footerBox">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">recipes</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="footerBox">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span>Address :</span>D 315 First Floor, Defence Colony, New Delhi
              – 110024, India
            </li>
            <li>
              <span><IoCall/>:</span><a href="tel:888 2250 336">888 2250 336</a>
            </li>
            <li>
              <span><IoCall/>:</span><a href="tel:935 4803 384">935 4803 384</a>
            </li>
            <li>
              <span><FaWhatsapp/>:</span><a href="tel:701 1863 769">701 1863 769</a>
            </li>
            <li>
              <span><FaWhatsapp/>:</span><a href="tel:935 4803 384">935 4803 384</a>
            </li>
          </ul>
        </div>
        <div className="footerBox socialLinks">
          <h3>social links</h3>
          <ul>
           <li><a className="bg-blue-500" href="#"><FaFacebookF/></a></li>
           <li><a className="bg-orange-500" href="#"><FaInstagram/></a></li>
           <li><a className="bg-red-600" href="#"><FaYoutube/></a></li>
          </ul>
        </div>
      </Container>
      <div className="bottom text-center bg-primary-600 p-2 ">
        <p className="text-white">© Copyright 2024 - 2025 | Deepak Gusaiwal | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
