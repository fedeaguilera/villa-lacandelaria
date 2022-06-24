import { AnimatePresence, Variants, motion } from "framer-motion";
import { FunctionComponent } from "react";
import Description from "./Description";
import Gallery from "./Gallery";
import Logos from "./Logos";

interface ServicesProps {}

const paragraph: Variants = {
	hidden: {
		opacity: 0,
		y: -50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			duration: 2,
			bounce: 0.3,
		},
	},
};

const image: Variants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			duration: 2,
			bounce: 0.3,
		},
	},
};
const title: Variants = {
	hidden: {
		opacity: 0,
		y: -45,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 2,
		},
	},
};

const Services: FunctionComponent<ServicesProps> = () => {
	return (
		<AnimatePresence>
			<motion.section className="w-screen min-h-screen mt-16 bg-primary">
				<motion.h3
					variants={title}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.8 }}
					className=" pt-20 text-5xl md:text-6xl text-center text-gallery"
				>
					NUESTRAS INSTALACIONES
				</motion.h3>
				<div className="w-full h-2/5 relative flex flex-col justify-center items-center mt-10">
					<Gallery />
					<Description />
					<Logos />
				</div>
			</motion.section>
		</AnimatePresence>
	);
};

export default Services;
