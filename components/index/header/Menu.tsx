import { FunctionComponent } from "react";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="w-1/3 sm:flex justify-evenly text-xl transition-all hidden">
      <a className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery" href="">Inicio</a>
      <a className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery" href="">Servicios</a>
      <a className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery" href="">Reservas</a>
      <a className="p-4 hover:text-gallery duration-300 border-b-2 border-b-secondary hover:border-b-gallery">Contacto</a>
    </div>
  );
};

export default Menu;
