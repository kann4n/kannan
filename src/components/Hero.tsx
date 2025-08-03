import { motion } from "framer-motion";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
      <motion.h1
        className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 12px rgba(255,255,255,0.6)",
        }}
      >
        Aravind K.B
      </motion.h1>
      <motion.p
        className="mt-4 max-w-md text-base text-gray-300 sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        Creative Coder · Building immersive experiences with React, Three.js &
        Motion.
      </motion.p>
    </section>
  );
};

export default Hero;
