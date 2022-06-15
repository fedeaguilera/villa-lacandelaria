import { FunctionComponent } from "react";
import Gallery from "./Gallery";

interface ServicesProps {
    
}
 
const Services: FunctionComponent<ServicesProps> = () => {
    return ( 
        <section className="w-screen min-h-screen  ">
            <div className="w-full h-2/5 relative flex justify-center items-center">
            <Gallery/>
            </div>
            
        </section>
     );
}
 
export default Services;