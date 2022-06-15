import { FunctionComponent } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import picture from "../../../../public/sierra_4.jpg";

interface IntroductionProps {}

const paragraph:Variants = {
  hidden: {
    opacity: 0,
    y : -50
  },
  visible: {
    opacity: 1,
    y:0,
    transition : {
    type: "spring",
    duration: 2,
    bounce: 0.3,
    }
  },
};

const image:Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y:0,
    transition : {
    type: "spring",
    duration: 2,
    bounce: 0.3,
    }
  },
};
const title:Variants = {
  hidden: {
    opacity: 0,
    y: -45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type : "spring",
      bounce: 0.3, 
      duration: 2 },
  },
};
const Introduction: FunctionComponent<IntroductionProps> = () => {
  return (
    <AnimatePresence>
      <motion.section className="mx-auto min-h-screen">
        <motion.h3
          variants={title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8}}
          className=" pt-20 text-6xl text-center text-gallery"
        >
          ¡Bienvenidos!{" "}
        </motion.h3>
     
        <div className="flex flex-col md:flex-row justify-center items-center md:p-8 md:mt-6  ">
          <motion.div 
          
          className="w-full  p-6 rounded-md flex  justify-center items-center ">
            <motion.p 
            variants={paragraph}
            initial="hidden"
            whileInView="visible"
            viewport={{once : true , amount : 0.8}}
            className="text-xl text-center text-test font-semibold w-3/4">
              El lugar se encuentra ubicado en Sierra de los Padres, a tan solo
              13 km de la ciudad balnearia de Mar del Plata. Descanse en un
              lugar diferente, donde la naturaleza y el aire de las sierras se
              hacen presentes. Los invitamos a a una experiencia inolvidable en
              un ambiente natural y relajado.
            </motion.p>
          </motion.div>
          <motion.div 
          variants={image}
          initial="hidden"
          whileInView="visible"
          viewport={{once : true , amount : 0.8}}
          className="flex justify-center items-center p-4 md:w-3/4">
            <Image
              objectPosition="center"
              objectFit="contain"
              src={picture}
              alt="Ingreso a Sierra de Los Padres"
            ></Image>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Introduction;
