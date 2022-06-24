import { FunctionComponent } from "react";
import { RiWhatsappFill } from "react-icons/ri";
interface WhatsAppIconProps {}

const WhatsAppIcon: FunctionComponent<WhatsAppIconProps> = () => {
	return (
		<div className="fixed bottom-10 right-8 z-50 w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center group ">
			<div className="group-hover:scale-150 transition-all  duration-500">
				<a
					href="https://api.whatsapp.com/send?phone=+542236635207&text=Hola,%20me%20gustar%C3%ADa%20averiguar%20precios%20y%20disponibilidad%20para..."
					target="_blank"
					rel="noopener noreferrer"
				>
					<RiWhatsappFill size="3em" color="00BB2D" />
				</a>
			</div>
		</div>
	);
};

export default WhatsAppIcon;
