import { FunctionComponent } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import picture from "../../../../public/intro.jpg";

interface IntroductionProps {}

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
const Introduction: FunctionComponent<IntroductionProps> = () => {
	return (
		<AnimatePresence>
			<motion.section className="min-h-screen">
				<div className="px-4 py-16 mx-auto  sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
						<div className="relative z-10 lg:py-16">
							<motion.div
								variants={image}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.8 }}
								className="relative h-64 sm:h-80 lg:h-full"
							>
								<Image
									className="rounded-xl"
									objectPosition="center"
									objectFit="contain"
									src={picture}
									alt="Ingreso a Sierra de Los Padres"
								></Image>
							</motion.div>
						</div>

						<div className="relative flex items-center bg-gray-100">
							<span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

							<div className="p-8 sm:p-16 lg:p-24">
								<motion.h3
									variants={title}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.8 }}
									className="text-5xl text-center text-gallery"
								>
									¡Bienvenidos!
								</motion.h3>

								<motion.p
									variants={paragraph}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.8 }}
									className="text-xl text-center text-test font-semibold mt-8 "
								>
									El lugar se encuentra ubicado en Sierra de los Padres,
									localidad del Partido General Pueyrredon, Provincia de Buenos
									Aires, a tan solo 13 km de la ciudad balnearia de Mar del
									Plata. Lugar único para el descanso, disfrutar de sus
									paisajes, tranquilidad y armonía con la naturaleza.- La
									geografía de la localidad es sumamente atractiva debido a la
									forma particular de trazado de las calles que siguen
									aproximadamente los accidentes del terreno, proporcionando
									vistas hermosas a colinas y valles.Descanse en un lugar
									diferente, donde la naturaleza y el aire de las sierras se
									hacen presentes. Los invitamos a a una experiencia inolvidable
									en un ambiente natural y relajado.
								</motion.p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
		</AnimatePresence>
	);
};

export default Introduction;
