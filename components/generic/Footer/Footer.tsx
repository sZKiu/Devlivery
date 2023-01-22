import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="font-home p-2 flex gap-2 flex-col items-center bg-zinc-50 border-t-2 ">
      <p className="font-medium text-sm">
        ©2023 sZKiu Porfolio. All Rights Reserved
      </p>

      <div className="flex gap-4 text-2xl">
        <a
          className="transition-transform duration-300 hover:scale-125"
          href="https://www.linkedin.com/in/augusto-andres-mendez-55688b220/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a
          className="transition-transform duration-300 hover:scale-125"
          href="https://github.com/sZKiu"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
