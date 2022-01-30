import { FC } from "react";
import Menu from "./Menu";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-secondary min-h-header z-50 fixed w-full flex justify-evenly items-center  text-primary ">
      <div className="">
        <h1 className="font-title text-5xl lg:text-6xl ">Villa La Candelaria</h1>
      </div>
      <Menu/>

    </header>
  );
};

export default Header;
