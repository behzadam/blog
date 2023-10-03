import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <article className="py-4">
      <h3 className="text-lg md:text-xl font-medium md:leading-relaxed">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <section className="text-xs leading-loose flex items-center text-neutral-600">
        <DateFormatter dateString={date} />
      </section>
    </article>
  );
};

export default PostPreview;
