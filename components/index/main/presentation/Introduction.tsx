import { FunctionComponent } from "react";
import Image from "next/image";
import picture from "../../../../public/Sierra-de-los-padres-773x458.jpeg";
interface IntroductionProps {}

const Introduction: FunctionComponent<IntroductionProps> = () => {
  return (
    <section className=" pt-20 mx-auto">
      <h3 className="text-6xl text-center text-gallery">Bienvenidos a Villa la Candelaria</h3>
      <div className="flex items-center justify-evenly  mt-8">
        <div className="w-1/3  p-8 rounded-md flex justify-center items-center">
          <p className="text-xl text-test font-semibold">
             El lugar se encuentra ubicado en Sierra de los Padres, a tan solo 13 km de la ciudad
            balnearia de Mar del Plata. Descanse en un lugar diferente, donde la
            naturaleza y el aire de las sierras se hacen presentes.
          </p>
        </div>
        <div className="w-1/3 rounded-md border transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl">
          <Image objectPosition="center" objectFit="contain" src={picture} alt="Ingreso a Sierra de Los Padres"></Image>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
