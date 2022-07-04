import ModalImage from "@avidian/react-modal-image";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface AroundProps {}
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

const Around: React.FunctionComponent<AroundProps> = () => {
	return (
		<AnimatePresence>
			<section
				className="pb-20 min-h-screen bg-gradient-to-t from-cyan-100 via-lightBlue-500 to-lightBlue-500"
				id="around"
			>
				<motion.div
					variants={title}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.8 }}
					className="pt-20"
				>
					<h3 className=" pt-10 text-5xl md:text-6xl text-center text-gallery">
						NUESTROS ALREDEDORES
					</h3>
				</motion.div>
				<motion.div
					variants={image}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					className="container px-5 py-2 mx-auto pt-20 md:pt-24 lg:px-32 "
				>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="flex flex-wrap w-1/2">
							<div className="w-1/2 p-1 md:p-2 rounded-lg border-primary border-2">
								<ModalImage
									className="block object-cover object-center w-full h-full rounded-lg"
									small="/sierra_1.jpg"
									large="/sierra_1.jpg"
									alt="Vista de la sierras"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2  rounded-lg border-primary border-2">
								<ModalImage
									alt="Gruta de los Pañuelos"
									className="block object-cover object-center w-full h-full rounded-lg"
									small="/sierra_2.jpg"
									large="/sierra_2.jpg"
								/>
							</div>
							<div className="w-full p-1 md:p-2  rounded-lg border-primary border-2">
								<ModalImage
									alt="Laguna de los Padres"
									className="block object-cover object-center w-full h-full rounded-lg"
									small="/laguna.jpg"
									large="/laguna.jpg"
								/>
							</div>
						</div>
						<div className="flex flex-wrap w-1/2">
							<div className="w-full p-1 md:p-2  rounded-lg border-primary border-2">
								<ModalImage
									alt="Laguna de los Padres"
									className="block object-cover object-center w-full h-full rounded-lg"
									small="/laguna_2.jpg"
									large="/laguna_2.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2  rounded-lg border-primary border-2">
								<ModalImage
									alt="Misiones Jesuitas"
									className="block object-cover object-center w-full h-full rounded-lg"
									small="/sierra_3.jpg"
									large="/sierra_3.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2  rounded-lg border-primary border-2">
								<ModalImage
									alt="Acceso a sierra"
									className="block object-cover object-center w-full h-full rounded-lg"
									small="sierra_4.jpg"
									large="/sierra_4.jpg"
								/>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					variants={paragraph}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.8 }}
					className="w-10/12 my-12 mx-auto p-9"
				>
					<p className="text-justify text-xl text-test font-semibold">
						A tan solo unos minutos se encuentra la Reserva Natural Municipal
						Lagunda de los Padres.Dentro de la misma se encuentra el Museo
						Tradicionalista José Hernández, donde vivió el autor del Martín
						Fierro y la escuela de Educación Secundaria Agraria Nro. 1. Sobre
						las costas de la laguna hay distintos centros recreativos, como el
						Club de Pesca, el de los empleados municipales, y amplias áreas
						boscosas libres. Desde 1995, en ocasión de los Juegos Panamericanos,
						se construyó la cancha de remo, de 2000 m de largo, dragando y
						señalizando parte de la laguna. Ademas podra disfrutar de{" "}
						<span>la Gruta de los Pañuelos</span> situado en lo alto de la{" "}
						<span>Sierra de los Padres</span>
					</p>
				</motion.div>
			</section>
		</AnimatePresence>
	);
};

export default Around;
