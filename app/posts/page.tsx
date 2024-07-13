"use client";
import React from "react";
import styles from "./styles.module.css";
import { gsap, useGSAP } from "./gsap";

const Page = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".mainDiv",
      { x: 360, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        yoyo: true,
        ease: "bounce.inOut",
        stagger: {
          amount: 4,
          ease: "bounce.inOut",
          yoyo: true,
          from: "start",
        },
      }
    );
  }, []);
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  return (
    <div className=" flex flex-col justify-center items-center mt-4  space-y-2">
      {posts.map((post, index) => (
        <div
          key={`${post}-${index}`}
          className={`${styles.mainDiv} mainDiv text-sm tracking-tight text-black  text-center flex flex-col justify-center`}
        >
          This is a message
        </div>
      ))}
    </div>
  );
};

export default Page;
