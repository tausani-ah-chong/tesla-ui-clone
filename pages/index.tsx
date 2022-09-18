import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import CarView from "../components/car-view";
import Controls from "../components/controls";
import MapView from "../components/map-view";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: FunctionComponent<HomeProps> = (props) => {
  const { MAPBOX_TOKEN } = props;

  return (
    <div className="flex flex-col justify-between h-screen w-full p-12">
      <Head>
        <title>Tesla UI Clone</title>
        <meta
          name="Ever wondered what it was like to drive a Tesla?"
          content="Created by Tausani Ah Chong"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div className="columns-2 h-full">
        <CarView />
        <MapView MAPBOX_TOKEN={MAPBOX_TOKEN} />
      </div>

      <Controls />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  MAPBOX_TOKEN: string;
}> = async () => {
  return {
    props: {
      MAPBOX_TOKEN: JSON.stringify(process.env.MAPBOX_TOKEN),
    },
  };
};

export default Home;
