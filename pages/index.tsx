import Head from "next/head";
import { FunctionComponent } from "react";
import Controls from "../components/controls";
import MainView from "../components/main-view";

const Home: FunctionComponent = () => {
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
      </Head>

      <MainView />
      <Controls />
    </div>
  );
};

export default Home;
