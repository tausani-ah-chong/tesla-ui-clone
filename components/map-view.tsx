import { FunctionComponent } from "react";

const MapView: FunctionComponent = () => {
  const handleClick = () => alert("Map view tapped");

  return (
    <div
      className="flex justify-center items-center bg-gray-600 rounded-lg h-full"
      onClick={handleClick}
    >
      <h1 className="text-7xl">
        <a>Map view</a>
      </h1>
    </div>
  );
};

export default MapView;
