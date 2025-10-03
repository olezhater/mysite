import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="container mx-auto mt-5 laptop:mt-40">
        <div>
          <p className="text-2xl text-bold">Contact.</p>
          <div className="mt-10">
            <p className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </p>
            <p className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold mb-4">
              TOGETHER
            </p>
            <Button type="primary" onClick={() => window.open("https://t.me/olegteretenko")}>Send message</Button>
            <div className="mt-10">
            </div>
          </div>
        </div>
      </div>
      <p className="container mx-auto text-sm text-bold my-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.teretenko.com">
          <a className="underline underline-offset-1">Oleg Teretenko</a>
        </Link>
      </p>
    </>
  );
};

export default Footer;
