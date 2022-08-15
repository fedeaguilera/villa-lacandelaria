import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Slider from "react-slick";

export const images = [
	"/casa_2.jpg",
	"/casa_3.jpg",
	"/casa_4.jpg",
	"/casa_5.jpg",
	"/casa_6.jpg",
	"/casa_7.jpg",
];

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	initialSlide: 0,
	autoplay: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const slider: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 5,
		},
	},
};

const Gallery: FunctionComponent = () => {
	return (
		<AnimatePresence>
			<motion.div
				variants={slider}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.8 }}
				className="w-4/5"
			>
				<Slider {...settings} className="">
					{images.map((image, index) => (
						<div key={index} className="p-5">
							<Link href={`${image}`} passHref>
								<Image
									src={image}
									width="1024"
									height="600"
									layout="responsive"
									alt={image}
								/>
							</Link>
						</div>
					))}
				</Slider>
			</motion.div>
		</AnimatePresence>
	);
};

export default Gallery;
