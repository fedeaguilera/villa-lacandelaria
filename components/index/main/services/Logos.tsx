import { FunctionComponent } from "react";

import Image from "next/image";
import { FcWiFiLogo } from "react-icons/fc";
import {
	MdPool,
	MdBed,
	MdOutdoorGrill,
	MdOutlinePets,
	MdOutlineShower,
	MdTv,
} from "react-icons/md";
import Calefactor from "../../../../public/calefactor.png";
import Limpieza from "../../../../public/mucama.png";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface LogosProps {}

const tittle: Variants = {
	hidden: {
		x: -30,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 6,
			bounce: 0.3,
		},
	},
};
const logo1: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 5,
			bounce: 0.3,
		},
	},
};

const Logos: FunctionComponent<LogosProps> = () => {
	return (
		<AnimatePresence>
			<div className="mt-14 w-11/12 pb-10 flex flex-col justify-center items-center  ">
				<motion.h4
					variants={tittle}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.9 }}
					className="text-3xl text-secondary text-center md:text-left w-full"
				>
					Servicios y Amenities
				</motion.h4>
				<div className="flex w-3/4 flex-wrap  py-5 justify-center items-center mr-10">
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className="group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3  flex justify-center items-center group-hover:scale-110">
							<FcWiFiLogo size="3em" />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300 ">
							Internet
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className="group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center group-hover:scale-110 ">
							<MdPool size="3em" />
						</div>
						<span className="w-1/3 text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300">
							Pileta
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className="group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center  group-hover:scale-110">
							<MdBed size="3em" />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300">
							Sommier
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className="group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center  group-hover:scale-110">
							<MdOutdoorGrill size="3em" />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300  ">
							Parrilla
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className=" group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center group-hover:scale-110 ">
							<MdOutlinePets size="3em" />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300 ">
							Pet Friendly
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className="group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center group-hover:scale-110">
							<MdOutlineShower size="3em" />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300 ">
							Agua caliente
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className=" group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center group-hover:scale-110">
							<MdTv size="3em" />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300 ">
							Flow
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className=" group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 flex justify-center items-center group-hover:scale-110 duration 500">
							<Image src={Calefactor} width={48} height={48} />
						</div>
						<span className="w-1/3 md:w-full text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100 mt-2  duration-300 ">
							Calefactor{" "}
						</span>
					</motion.div>
					<motion.div
						variants={logo1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.9 }}
						className=" group w-full md:w-1/6 flex md:flex-col justify-center items-center mt-5"
					>
						<div className="w-2/3 md:w-1/2 flex justify-center items-center group-hover:scale-110 group-focus:scale-110 duration 500">
							<Image src={Limpieza} width={48} height={48} />
						</div>
						<span className="w-1/3 md:w-full text-right md:text-center text-lg font-semibold text-secondary opacity-100  md:opacity-0 group-hover:opacity-100  duration-300 mt-2  ">
							Ropa Blanca{" "}
						</span>
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
	);
};

export default Logos;
