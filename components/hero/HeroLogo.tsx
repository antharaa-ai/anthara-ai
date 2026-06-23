import Image from "next/image";
import ParallaxWrapper from "../ParallaxWrapper";
import { motion } from "framer-motion";
export default function HeroLogo() {
  return (
   <><ParallaxWrapper>

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[700px] w-[700px]"
      >
        ...
      </motion.div>

      <Image
        src="/AntharaLogo_converted.svg"
        alt="Anthara"
        width={420}
        height={420} />

    </ParallaxWrapper><div className="w-[700px] h-[700px] border border-white">
        <Image
          src="/AntharamainLogo.png"
          alt="Anthara"
          width={700}
          height={700}  
          className="object-contain" />
      </div></>
  );
}