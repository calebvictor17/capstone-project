import React from "react";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <>
      <footer className="footer">
        <div>
          <Image
            src="/foot-logo-img.jpeg"
            alt="sportLogo"
            width={60}
            height={120}
            className="justify-center"
          />
        </div>
        <div>
          <hi>SUBSCRIBE NEWSLETTER</hi>
          <input type="email " placeholder="Email Address" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
