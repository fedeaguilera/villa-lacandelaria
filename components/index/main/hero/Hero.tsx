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
				<div className=" bg-hero bg-no-repeat bg-center bg-cover min-h-screen flex flex-col items-center justify-center">
					<motion.h2
						initial="hidden"
						animate="visible"
						variants={title}
						className="md:mt-0 mt-12 text-4xl text-center md:text-6xl"
					>
						{" "}
						Bienvenidos a Villa la Candelaria
					</motion.h2>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={subtitle}
						className="text-2xl md:text-4xl text-center my-10"
					>
						Experimente un lugar diferente de descanso rodeado de naturaleza
					</motion.p>
					<motion.a
						initial="hidden"
						animate="visible"
						variants={button}
						href="https://api.whatsapp.com/send?phone=+542236635207&text=Hola,%20me%20gustar%C3%ADa%20averiguar%20precios%20y%20disponibilidad%20para..."
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-2xl font-bold bg-gallery  p-6 text-2xl transition-all hover:bg-white hover:text-gallery"
					>
						Reserva
					</motion.a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
