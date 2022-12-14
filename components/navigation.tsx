import React, { FunctionComponent } from 'react';
import { Button } from '@mantine/core';

interface NavigationProps {
  // prop: string;
}

const Navigation: FunctionComponent<NavigationProps> = (props) => {
  const handleClick = () => alert('Navigation coming soon!');

  return (
    <Button
      className="absolute bg-gray-900 left-8 top-8 text-gray-400 opacity-90"
      leftIcon={
        <span className="material-symbols-outlined text-2xl text-gray-400">
          near_me
        </span>
      }
      rightIcon={
        <span className="material-icons text-2xl text-gray-400">
          chevron_right
        </span>
      }
      size="md"
      radius="lg"
      onClick={handleClick}
    >
      Navigate
    </Button>
  );
};

export default Navigation;
