import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import { ahang } from "../lib/fonts";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout dir="rtl" className={ahang.className}>
      <Head>
        <title>{"یادداشت های بهزاد علی محمدزاد"}</title>
      </Head>
      <Container>
        <div className="max-w-screen-md mx-auto py-20">
          <Intro />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return {
    props: { allPosts },
  };
};
