import { Button } from '@mantine/core';
import React, { FunctionComponent } from 'react';
import Navigation from './navigation';

interface MapOverlayProps {
  onClickMyLocation: () => void;
  onClickZoomIn: () => void;
  onClickZoomOut: () => void;
}

const MapOverlay: FunctionComponent<MapOverlayProps> = (props) => {
  const { onClickMyLocation, onClickZoomIn, onClickZoomOut } = props;

  return (
    <>
      <Navigation />
      <Button
        className="absolute top-8 right-8 bg-gray-900 opacity-90"
        variant="filled"
        radius="xl"
        size="md"
        onClick={onClickMyLocation}
      >
        <span className="material-symbols-outlined text-gray-400">
          navigation
        </span>
      </Button>
      <Button.Group orientation="vertical" className="absolute top-24 right-8">
        <Button
          className="bg-gray-900 opacity-90"
          variant="filled"
          size="md"
          onClick={onClickZoomIn}
        >
          <span className="material-symbols-outlined text-gray-400">add</span>
        </Button>
        <Button
          className="bg-gray-900 opacity-90"
          variant="filled"
          size="md"
          onClick={onClickZoomOut}
        >
          <span className="material-symbols-outlined text-gray-400">
            remove
          </span>
        </Button>
      </Button.Group>
    </>
  );
};

export default MapOverlay;
