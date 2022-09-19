import React, { FunctionComponent } from 'react';

interface NavigationProps {
  // prop: string;
}

const Navigation: FunctionComponent<NavigationProps> = (props) => {
  const handleClick = () => alert('Navigation coming soon!');

  return (
    <a className="cursor-pointer" onClick={handleClick}>
      <div className="absolute flex items-center left-8 top-8 p-2 w-48 bg-black bg-opacity-80 rounded-lg">
        <span className="material-symbols-outlined text-2xl text-gray-400">
          near_me
        </span>
        <p className="pl-2 text-gray-400">Navigate</p>
        <span className="material-icons text-2xl pl-14 text-gray-400">
          chevron_right
        </span>
      </div>
    </a>
  );
};

export default Navigation;
