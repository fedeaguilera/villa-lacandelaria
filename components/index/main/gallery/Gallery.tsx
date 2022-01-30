import { FunctionComponent } from "react";
import Description from "./Description";
import Images from "./Images";

interface GalleryProps {}

const Gallery: FunctionComponent<GalleryProps> = () => {
  return (
    <section className="mt-10 text-gallery">
      <Description />
      <Images />
    </section>
  );
};

export default Gallery;
