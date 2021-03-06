import Head from "next/head";
import Feed from "../components/Feed";
import CommentModal from "../components/CommentModal";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

export default function Home({ newsResults, randomUserResults }) {
  return (
    <div>
      <Head>
        <title>Twitter clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widget
          newsResults={newsResults.articles}
          randomUserResults={randomUserResults.results}
        />

        {/* modal */}
        <CommentModal />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
  ).then((res) => res.json());

  // who to follow section
  const randomUserResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());
  return {
    props: {
      newsResults,
      randomUserResults,
    },
  };
}
