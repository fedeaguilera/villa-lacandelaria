import { FunctionComponent } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<footer className="pt-10 px-3 py-8 bg-secondary text-primary text-2 0 transition-colors duration-200">
			<div className="flex flex-col">
				<div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
				<div className="mt-4 md:mt-0 flex flex-col md:flex-row">
					<nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
						<Link
							className="hover:text-gray-700 dark:hover:text-white cursor-pointer"
							activeClass="active"
							to="home"
							smooth={true}
							duration={3000}
						>
							Inicio
						</Link>
						<Link
							className="hover:text-gray-700 dark:hover:text-white cursor-pointer"
							to="house"
							smooth={true}
							duration={3000}
						>
							Nuestro lugar
						</Link>
						<Link
							className="hover:text-gray-700 dark:hover:text-white cursor-pointer"
							activeClass="active"
							to="around"
							smooth={true}
							duration={3000}
						>
							Alrededores
						</Link>
						<Link
							className="hover:text-gray-700 dark:hover:text-white cursor-pointer"
							activeClass="active"
							to="contact"
							smooth={true}
							duration={3000}
						>
							Contacto
						</Link>
					</nav>
					<div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
					<div className="mt-4 md:mt-0 flex-1 flex flex-col items-center justify-center md:border-r border-gray-100">
						<div className="flex-1 flex items-center justify-center">
							<a
								className="hover:text-primary-gray-20"
								href="https://www.instagram.com/villa_la_candelaria"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">Visitanos en instagram</span>
								<FaInstagram size="2em" />
							</a>
							<a
								className="ml-4 hover:text-primary-gray-20"
								href="https://api.whatsapp.com/send?phone=+542235780917&text=Hola,%20me%20gustar%C3%ADa%20averiguar%20precios%20y%20disponibilidad%20para..."
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">Whatsapp</span>
								<FaWhatsapp size="2em" />
							</a>
						</div>
						<div className="pt-2">
							<span>Villa La Candelaria - Sierra de los Padres</span>
						</div>
					</div>
					<div className="md:hidden mt-4 mx-auto w-full h-px rounded-full "></div>
					<div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
						<span className="">© 2022</span>
						<span className="mt-7 md:mt-1">
							Created by{}
							<a
								className="underline hover:text-primary-gray-20"
								href="https://www.linkedin.com/in/federico-aguilera-7287001b2/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Aguidev
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
