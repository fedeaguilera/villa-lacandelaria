import { FC, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import MenuResponsive from "./MenuResponsive";

interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ open, setOpen }) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.87 }}
      className="bg-secondary min-h-header z-50 fixed w-full flex flex-col md:flex-row justify-evenly items-center  text-primary "
    >
      <div className="">
        <h1 className="font-title text-5xl ">
          Villa La Candelaria
        </h1>
      </div>
      <MenuResponsive open={open} setOpen={setOpen} />
      <Menu />
    </motion.header>
  );
};

export default Header;
