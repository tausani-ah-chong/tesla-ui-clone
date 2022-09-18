import { FunctionComponent, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { GetStaticProps } from "next";
import next from "next";

type MapViewProps = {
  MAPBOX_TOKEN: string;
};

type Coordinates = {
  lat: number;
  long: number;
};

const INITIAL_COORDINATES: Coordinates = { lat: -36.8626, long: 174.7382 }; // Grey Lynn, Auckland, NZ

enum MapStyleEnum {
  NAVIGATION_NIGHT = "mapbox://styles/mapbox/navigation-night-v1",
  NAVIGATION_DAY = "mapbox://styles/mapbox/navigation-day-v1",
  LIGHT = "mapbox://styles/mapbox/light-v10",
  DARK = "mapbox://styles/mapbox/dark-v10",
  SATELLITE_STREETS = "mapbox://styles/mapbox/satellite-streets-v11",
}

const MapView: FunctionComponent<MapViewProps> = (props) => {
  const { MAPBOX_TOKEN } = props;

  mapboxgl.accessToken = MAPBOX_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coordinates, setCoordinates] =
    useState<Coordinates>(INITIAL_COORDINATES);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MapStyleEnum.DARK,
      center: [coordinates.long, coordinates.lat],
      zoom: zoom,
    });
  }, [coordinates, zoom]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    map.current.on("move", () => {
      setCoordinates({
        lat: map.current.getCenter().lat.toFixed(4),
        long: map.current.getCenter().lng.toFixed(4),
      });
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
