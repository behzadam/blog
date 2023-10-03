import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  const morePosts = allPosts.slice(1);
  return (
    <div dir="rtl">
      <Layout>
        <Head>
          <title>{"یادداشت های بهزاد علی محمدزاد"}</title>
        </Head>
        <Container>
          <div className="max-w-screen-md mx-auto py-20">
            <Intro />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
