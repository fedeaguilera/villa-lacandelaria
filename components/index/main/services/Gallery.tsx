import { AnimatePresence, motion, Variants } from "framer-motion";
import { FunctionComponent } from "react";
import Slider from "react-slick";

export const images = [
	"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
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
							<img src={image} width="1024" height="468" />
						</div>
					))}
				</Slider>
			</motion.div>
		</AnimatePresence>
	);
};

export default Gallery;
