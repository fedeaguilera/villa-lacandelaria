import { FunctionComponent } from "react";
import Gallery from "./Gallery";
import Logos from "./Logos";

interface ServicesProps {
    
}
 
const Services: FunctionComponent<ServicesProps> = () => {
    return ( 
        <section className="w-screen min-h-screen mt-10 ">
            <h3 className=" pt-20 text-6xl text-center text-gallery">Nuestras instalaciones</h3>
            <div className="w-full h-2/5 relative flex flex-col justify-center items-center mt-10">
            <Gallery/>
            <Logos/>
            </div>
            
        </section>
     );
}
 
export default Services;