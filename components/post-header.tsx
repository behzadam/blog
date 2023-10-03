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
      <DateFormatter dateString={date} />
    </header>
  );
};

export default PostHeader;
