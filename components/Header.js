import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google-logo"
        width={120}
        height={40}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
    </header>
  );
};

export default Header;
