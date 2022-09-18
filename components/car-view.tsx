import { FunctionComponent } from "react";

const CarView: FunctionComponent = () => {
  const handleClick = () => alert("Car view tapped");

  return (
    <div
      className="flex justify-center items-center bg-gray-900 rounded-lg h-full"
      onClick={handleClick}
    >
      <h1 className="text-7xl">
        <a>Car view</a>
      </h1>
    </div>
  );
};

export default CarView;
