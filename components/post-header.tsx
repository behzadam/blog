import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <header className="max-w-2xl mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center text-sm text-neutral-400">
        <h3>
          <a
            className="hover:underline underline-offset-2"
            href="https://www.linkedin.com/in/behzadam/"
          >
            بهزاد علی محمدزاد
          </a>
        </h3>
        <time className="mx-4">
          <DateFormatter dateString={date} />
        </time>
      </div>
    </header>
  );
};

export default PostHeader;
