import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { FunctionComponent } from 'react';
import CarView from '../components/car-view';
import Controls from '../components/controls';
import MapView from '../components/map-view';

const Home: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full bg-black p-12">
      <div className="columns-2 h-full">
        <CarView />
        <MapView />
      </div>

      <Controls />
    </div>
  );
};

export default Home;
