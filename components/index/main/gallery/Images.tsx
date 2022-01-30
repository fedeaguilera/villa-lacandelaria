import { FunctionComponent } from "react";
import Image from "next/image";


interface ImagesProps {}

const Images: FunctionComponent<ImagesProps> = () => {
  return (
    <div className="w-5/12 h-96 overflow-x-scroll ">
     
      <Image  width={800} height={800} src={"/casa.jpg"}/>
      <Image  width={800} height={800} src={"/casa_2.jpg"}/>
      <Image  width={800} height={800} src={"/casa_3.jpg"}/>
      <Image  width={800} height={800} src={"/casa_4.jpg"}/>
      <Image  width={800} height={800} src={"/casa_5.jpg"}/> 
    
      
      
    </div>
  );
};

export default Images;
