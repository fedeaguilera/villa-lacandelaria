import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
							<div className="w-1/2 p-1 md:p-2 rounded-lg border-primary relative">
								<Link href={"/around_2.jpg"} passHref>
									<Image
										className="block object-cover object-center p-1 w-full h-full rounded-lg"
										src="/around_2.jpg"
										alt="Vista de la sierras"
										layout="responsive"
										height={900}
										width={1200}
									/>
								</Link>
							</div>
							<div className="w-1/2 p-1 md:p-2  rounded-lg border-primary border-2 relative">
								<Link href={"/around_3.jpg"} passHref>
									<Image
										className="block object-cover object-center p-1  h-full rounded-lg"
										src="/around_3.jpg"
										alt="Gruta de los pañuelos vista"
										layout="responsive"
										width={1200}
										height={900}
									/>
								</Link>
							</div>
							<div className="w-full p-1 md:p-2  rounded-lg border-primary border-2 relative">
								<Link href={"/around.jpg"} passHref>
									<Image
										className="block object-cover object-center p-1 w-full h-full rounded-lg"
										src="/around.jpg"
										alt="Vista de la sierras"
										layout="responsive"
										width={1200}
										height={900}
									/>
								</Link>
							</div>
						</div>
						<div className="flex flex-wrap w-1/2">
							<div className="w-full p-1 md:p-2  rounded-lg border-primary border-2 relative">
								<Link href={"/laguna_2.jpg"} passHref>
									<Image
										className="block object-cover object-center p-1  h-full rounded-lg"
										src="/laguna_2.jpg"
										alt="Gruta de los pañuelos vista"
										layout="responsive"
										width={1200}
										height={900}
									/>
								</Link>
							</div>
							<div className="w-1/2 p-1 md:p-2  rounded-lg border-primary border-2 relative">
								<Link href={"/around_4.jpg"} passHref>
									<Image
										className="block object-cover object-center p-1  h-full rounded-lg"
										src="/around_4.jpg"
										alt="Gruta de los pañuelos vista"
										layout="responsive"
										width={1200}
										height={900}
									/>
								</Link>
							</div>
							<div className="w-1/2 p-1 md:p-2  rounded-lg border-primary border-2 relative">
								<Link href={"/around_5.jpg"} passHref>
									<Image
										className="block object-cover object-center p-1  h-full rounded-lg"
										src="/around_5.jpg"
										alt="Gruta de los pañuelos vista"
										layout="responsive"
										width={1200}
										height={900}
									/>
								</Link>
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
						Laguna de los Padres.Dentro de la misma se encuentra el Museo
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
