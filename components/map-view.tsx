import { FunctionComponent } from 'react';
import Map from './map';
import Navigation from './navigation';

const MapView: FunctionComponent = () => {
  return (
    <div className="h-full relative">
      <Map />
      <Navigation />
    </div>
  );
};

export default MapView;
