import { FunctionComponent } from "react";

const Controls: FunctionComponent = () => {
  const handleClick = () => alert("Controls tapped");

  return (
    <div
      className="flex justify-between items-center  pb-10 pt-4 px-16 w-full bg-black rounded-lg"
      onClick={handleClick}
    >
      <span className="material-icons text-4xl">drive_eta</span>
      <span className="material-icons text-4xl text-sky-400">ac_unit</span>
      <span className="material-icons text-4xl text-red-700">wb_sunny</span>
      <span className="material-icons text-4xl">
        airline_seat_recline_normal
      </span>
      <p className="text-4xl">20°</p>
      <span className="material-icons text-4xl">mode_fan_off</span>
      <p className="text-4xl">20°</p>
      <span className="material-icons text-4xl">
        airline_seat_recline_normal
      </span>
      <span className="material-icons text-4xl">music_note</span>
      <span className="material-icons text-4xl">phone_iphone</span>
      <span className="material-icons text-4xl">volume_up</span>
    </div>
  );
};

export default Controls;
