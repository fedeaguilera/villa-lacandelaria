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
				viewport={{ once: true, amount: 0.9, margin: "-5px" }}
				className="w-2/3 mt-10 text-xl font-body text-justify"
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas enim
					quidem animi quia, voluptates voluptatibus cupiditate alias dolorum
					nulla dolores, deserunt sed incidunt quibusdam illo nisi? Expedita
					pariatur beatae necessitatibus. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Quasi dicta, recusandae, at debitis
					temporibus similique, aliquid quaerat porro necessitatibus odit illo
					iste veniam praesentium voluptas unde quo adipisci quam labore. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quae,
					omnis consectetur ducimus voluptatibus quos odit quo odio culpa nobis
					rerum accusantium voluptatem totam corporis dignissimos libero.
					Placeat, cum ducimus?{" "}
				</p>
			</motion.div>
		</AnimatePresence>
	);
};

export default Description;
