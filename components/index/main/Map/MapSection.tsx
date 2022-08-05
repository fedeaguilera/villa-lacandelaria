import MapFooter from "../../footer/MapFooter";

interface MapSectionProps {}

const MapSection: React.FunctionComponent<MapSectionProps> = () => {
	return (
		<section className="flex flex-col items-center m-auto justify-center my-16  ">
			<h4 className="text-4xl p-3  text-secondary">COMO LLEGAR</h4>
			<MapFooter />
		</section>
	);
};

export default MapSection;
