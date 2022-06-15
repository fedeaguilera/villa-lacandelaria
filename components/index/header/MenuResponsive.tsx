import { FunctionComponent } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MenuProps } from "../../../pages/index";
import { motion } from "framer-motion";

const variants = {
  closed : {
    scale : 0.85,
    rotate : 360  },
  open : {
    rotate :180,
    scale : 1.25
  }
}

const MenuResponsive: FunctionComponent<MenuProps> = ({ open, setOpen }) => {
  

  return (
    <div className= "sm:hidden ">
      <motion.button
        variants={variants}
        animate={open ? "open" : "closed"}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu size="2rem" title="menu" />
      </motion.button>
    </div>
  );
};

export default MenuResponsive;
