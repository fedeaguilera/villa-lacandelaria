import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
interface MapProps {}

const MapFooter: React.FunctionComponent<MapProps> = () => {
	return (
		<Map
			initialViewState={{
				longitude: -57.7723518,
				latitude: -37.9492283,
				zoom: 12,
			}}
			style={{ width: "75%", height: 400, padding: "" }}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken="pk.eyJ1IjoiZmVkZTE5IiwiYSI6ImNsNjZtbzRiMzFnMTMzYnJ4bzBpYXExNTkifQ.vXjhfpooWjLe-wC3HbL5qA"
		>
			<Marker longitude={-57.7723518} latitude={-37.9492283} color="red" />
		</Map>
	);
};

export default MapFooter;
