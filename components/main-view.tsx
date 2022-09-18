import { FunctionComponent } from "react";
import CarView from "./car-view";
import MapView from "./map-view";

const MainView: FunctionComponent = () => {
  return (
    <div className="columns-2 h-full">
      <CarView />
      <MapView />
    </div>
  );
};

export default MainView;
