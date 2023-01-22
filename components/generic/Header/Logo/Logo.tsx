import React from "react";
import Link from "next/link";
import Log from "../../../../assets/img/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <img src={Log.src} alt="Logo" className="w-10" />

      <p className="font-bold text-lg">DevLivery</p>
    </Link>
  );
}

export default Logo;
