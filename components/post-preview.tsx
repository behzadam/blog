import Link from "next/link";
import { ahang } from "../lib/fonts";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <article className={ahang.className}>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <section className="text-sm mb-4">
        <DateFormatter dateString={date} />
      </section>
    </article>
  );
};

export default PostPreview;
