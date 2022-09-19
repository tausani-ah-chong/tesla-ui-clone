import { FunctionComponent, useEffect, useRef, useState } from 'react';
import MapOverlay from './map-overlay';
import mapboxgl from 'mapbox-gl';

type Coordinates = {
  lat: number;
  long: number;
};

const INITIAL_COORDINATES: Coordinates = { lat: -36.8626, long: 174.7382 }; // Grey Lynn, Auckland, NZ
const INITIAL_ZOOM = 14;

enum MapStyleEnum {
  NAVIGATION_NIGHT = 'mapbox://styles/mapbox/navigation-night-v1',
  NAVIGATION_DAY = 'mapbox://styles/mapbox/navigation-day-v1',
  LIGHT = 'mapbox://styles/mapbox/light-v10',
  DARK = 'mapbox://styles/mapbox/dark-v10',
  SATELLITE_STREETS = 'mapbox://styles/mapbox/satellite-streets-v11',
  CUSTOM_DARK = 'mapbox://styles/tausani93/cl88096v3000015n0mg64534o',
}

const MapView: FunctionComponent = () => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coordinates, setCoordinates] =
    useState<Coordinates>(INITIAL_COORDINATES);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MapStyleEnum.NAVIGATION_NIGHT,
      center: [coordinates.long, coordinates.lat],
      zoom: zoom,
    });
  }, [coordinates, zoom]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    map.current.on('move', () => {
      setCoordinates({
        lat: map.current.getCenter().lat.toFixed(4),
        long: map.current.getCenter().lng.toFixed(4),
      });
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  const handleClickMyLocation = () => {
    map.current.setCenter([INITIAL_COORDINATES.long, INITIAL_COORDINATES.lat]);
    map.current.setZoom(INITIAL_ZOOM);
  };

  const handleClickZoomIn = () => map.current.zoomIn({ duration: 1000 });

  const handleClickZoomOut = () => map.current.zoomOut({ duration: 1000 });

  return (
    <div className="h-full relative">
      <div ref={mapContainer} className="h-full w-full rounded-lg" />
      <MapOverlay
        onClickMyLocation={handleClickMyLocation}
        onClickZoomIn={handleClickZoomIn}
        onClickZoomOut={handleClickZoomOut}
      />
    </div>
  );
};

export default MapView;
