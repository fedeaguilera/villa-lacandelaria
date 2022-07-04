import { FunctionComponent } from "react";
import { Link } from "react-scroll";
interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
	return (
		<div className="w-2/4 sm:w-full sm:flex justify-center text-xl transition-all hidden">
			<Link
				className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery cursor-pointer"
				activeClass="active"
				to="home"
				smooth={true}
				duration={3000}
			>
				Inicio
			</Link>
			<Link
				className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery cursor-pointer"
				activeClass="active"
				to="house"
				smooth={true}
				duration={3000}
			>
				Nuestro lugar
			</Link>
			<Link
				className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery cursor-pointer"
				activeClass="active"
				to="around"
				smooth={true}
				duration={3000}
			>
				Alrededores
			</Link>
			<Link
				className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery cursor-pointer"
				activeClass="active"
				to="contact"
				smooth={true}
				duration={3000}
			>
				Contacto
			</Link>
		</div>
	);
};

export default Menu;
