import Link from "next/link";
import React from "react";

function ButtonMd({ styleButton, link }) {
  return (
    <button className={styleButton}>
      <Link href={link} passHref>
        <p className="">Start to explore</p>
      </Link>
    </button>
  );
}

export default ButtonMd;
