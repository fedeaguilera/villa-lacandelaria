import { FunctionComponent } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";


interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className="min-h-screen w-full  text-primary">
    
    <div className="min-h-screen bg-hero bg-no-repeat bg-center  bg-cover flex flex-col flex-1 items-center justify-center">
    <h2 className= "text-8xl "> Sierra de los Padres</h2>
    <p className="text-5xl">Experimente un lugar diferente de descanso rodeado de naturaleza</p>
    </div>
    </section>

  );
};

export default Hero;
