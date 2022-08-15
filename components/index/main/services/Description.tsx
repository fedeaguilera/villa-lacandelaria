import { FunctionComponent } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface DescriptionProps {}
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

const Description: FunctionComponent<DescriptionProps> = () => {
	return (
		<AnimatePresence>
			<motion.div
				variants={paragraph}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.9, margin: "25px" }}
				className="w-2/3 mt-10 text-xl font-body text-justify text-test"
			>
				<p className="text-justify text-xl text-test font-semibold">
					Villa La Candelaria, es una casa serrana implantada sobre un lote de
					460 m2, de 120 m2; construida en 2 plantas con ambientes comodos. En
					planta baja accedemos a un quincho equipado con cocina completa con
					hogar a leña; baño completo y una habitación matrimonial, Wi-Fi;
					Android TV.- En su planta alta se accede a un play room con juegos de
					mesa, baño completo; una habitación matrimonial y una habitación con
					divan cama.- En su exterior Villa La Candelaria posee un amplio parque
					con variedad de vegetación autóctona, arboles y arbustos.- Cuenta con
					sector de metegol; sector de parrilla, disco, asador; horno de barro;
					mesa de ping-pong y piscina.-{" "}
				</p>
			</motion.div>
		</AnimatePresence>
	);
};

export default Description;
