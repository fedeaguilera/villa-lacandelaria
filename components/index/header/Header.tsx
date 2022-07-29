import { FC, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import MenuResponsive from "./MenuResponsive";
import Logo from "../../../public/logo.png";
import Image from "next/image";
interface HeaderProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ open, setOpen }) => {
	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.87 }}
			className="bg-secondary sm:h-[28vh] md:h-[15vh] h-[25vh] z-50 fixed w-full flex justify-evenly items-center flex-col md:flex-row sm:justify-center   text-primary "
		>
			<div className="object-contain text-center flex justify-center items-center w-full md:w-1/2 h-32 p-1 md:p-2 rounded-lg">
				<Image src={Logo} alt="logo" width={325} height={95}></Image>
			</div>
			<MenuResponsive open={open} setOpen={setOpen} />
			<Menu />
		</motion.header>
	);
};

export default Header;
