import { AnimatePresence, motion } from "framer-motion";
import {Dispatch, SetStateAction} from 'react';
import { Link } from "react-scroll";

interface AsideProps {
  open: boolean;
  setOpen : Dispatch<SetStateAction<boolean>>;
}
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const AsideResponsive: React.FC<AsideProps> = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="w-full bg-secondary min-h-screen fixed mt-10 z-50"
          initial={{ x: -300, y: 55 }}
          animate={{
            x: 0,
          }}
          exit={{
            x: -300,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            className="flex flex-col mt-16 text-2xl justify-center items-center font-header font-black text-primary p-4"
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            variants={sideVariants}
          >
            <motion.div
              className="p-2 mt-2  cursor-pointer"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={3000}
                
                onClick={() => setOpen(false)}
              >
                Inicio
              </Link>
            </motion.div>
            <motion.div
              className="p-2 mt-2  cursor-pointer"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={3000}
                offset={-100}
                onClick={() => setOpen(false)}
              >
                Servicios
              </Link>
            </motion.div>
            <motion.div
              className="p-2 mt-2  cursor-pointer"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <Link
                activeClass="active"
                to="skill"
                smooth={true}
                duration={3000}
                offset={-150}
                onClick={() => setOpen(false)}
              >
                Reservas
              </Link>
            </motion.div>
            <motion.div
              className="p-2 mt-2  cursor-pointer"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
                <Link
                activeClass="active"
                to="portafolio"
                smooth={true}
                duration={3000}
                offset={50}
                onClick={() => setOpen(false)}
              >
                Contacto
              </Link>
            </motion.div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default AsideResponsive;