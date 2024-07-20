"use client";

import helixImage from "../../public/assets/images/helix2.png";
import emojiStar from "../../public/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section
      className="bg-black text-white py-[72px] sm:py-24 text-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt=""
            className="absolute top-6 left-[calc(100%+36px)] hidden sm:inline"
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiStar}
            alt=""
            className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline"
          />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <div className="">
          <p className="text-xl text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <form
          action=""
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
        >
          <input
            type="email"
            name="email"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:bg-white/60 sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </section>
  );
};
