import Head from "next/head";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed />

        {/* widgets */}
        {/* <Widget /> */}

        {/* modal */}
        {/* <Modal /> */}
      </main>
    </div>
  );
}
