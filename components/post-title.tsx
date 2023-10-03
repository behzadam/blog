import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-bold text-2xl md:text-4xl leading-relaxed md:leading-relaxed mb-4">
      {children}
    </h1>
  );
};

export default PostTitle;
