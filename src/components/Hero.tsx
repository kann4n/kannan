import { motion } from "framer-motion";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
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
        className="mt-4 text-base sm:text-lg text-gray-300 max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        Creative Coder · Building immersive experiences with React, Three.js & Motion.
      </motion.p>
    </section>
  );
}

export default Hero;
