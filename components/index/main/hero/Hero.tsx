import { FunctionComponent } from "react";

import { motion } from "framer-motion";

const title = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: -200 },
	transition: {
		delay: 0.7,
		type: "spring",
		stiffness: 600,
	},
};

const subtitle = {
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: 200 },
	transition: {
		delay: 0.7,
		type: "spring",
		stiffness: 600,
	},
};
const button = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 100 },
	transition: {
		delay: 1.5,
		type: "spring",
		stiffness: 1000,
	},
};

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	return (
		<section className="min-h-screen  text-primary" id="home">
			<div className="min-h-screen w-full">
				<div className="bg-hero bg-no-repeat bg-center bg-cover min-h-screen flex flex-col items-center justify-center">
					<motion.h2
						initial="hidden"
						animate="visible"
						variants={title}
						className="text-5xl text-center md:text-6xl"
					>
						{" "}
						Bienvenidos a Villa la Candelaria
					</motion.h2>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={subtitle}
						className="text-3xl md:text-4xl text-center my-10"
					>
						Experimente un lugar diferente de descanso rodeado de naturaleza
					</motion.p>
					<motion.button
						initial="hidden"
						animate="visible"
						variants={button}
						className="rounded-2xl font-bold bg-gallery  p-6 text-2xl transition-all hover:bg-white hover:text-gallery"
					>
						Reserva
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
