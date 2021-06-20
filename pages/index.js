import Head from "next/head";
import Nav from "./components/Nav";
import Books from "./components/Books";
import data from "../utils/content.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lord of Rings </title>
      </Head>
      <Nav />

      <Books data={data} />
    </div>
  );
}
