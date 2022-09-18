import { FunctionComponent, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { GetStaticProps } from "next";
import next from "next";

type MapViewProps = {
  MAPBOX_TOKEN: string;
}

type Coordinates = {
  lat: number;
  long: number;
}

const INITIAL_COORDINATES: Coordinates = { lat: -36.8626, long: 174.7382 } // Grey Lynn, Auckland, NZ

const MapView: FunctionComponent<MapViewProps> = (props) => {
  const { MAPBOX_TOKEN } = props;

  mapboxgl.accessToken = MAPBOX_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coordinates, setCoordinates] = useState<Coordinates>(INITIAL_COORDINATES);
  const [zoom, setZoom] = useState(14);

  console.log(coordinates);
  

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [coordinates.long, coordinates.lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    map.current.on("move", () => {
      setCoordinates({ lat: map.current.getCenter().lat.toFixed(4), long: map.current.getCenter().lng.toFixed(4) })
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div className="flex justify-center items-center rounded-lg h-full">
      <div ref={mapContainer} className="h-full w-full rounded-lg" />
    </div>
  );
};

export default MapView;
