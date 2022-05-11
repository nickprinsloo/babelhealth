import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Babel Health</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        <Image
          src="./logo.svg"
          alt="Babel Health Logo"
          width={935}
          height={195}
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

export default Home;
