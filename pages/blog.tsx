import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import LayoutBlog from "../components/layout-blog";
import MoreStories from "../components/more-stories";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import { ahang } from "../lib/fonts";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <LayoutBlog dir="rtl" className={ahang.className}>
      <Head>
        <title>{"یادداشت های بهزاد علی محمدزاد"}</title>
      </Head>
      <Container>
        <Intro />
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </LayoutBlog>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return {
    props: { allPosts },
  };
};
