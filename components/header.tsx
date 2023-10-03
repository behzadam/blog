import Link from "next/link";

const Header = () => {
  return (
    <h2 className="font-bold my-8 text-right max-w-2xl mx-auto">
      <Link href="/blog" className="hover:underline">
        یادداشت ها
      </Link>
    </h2>
  );
};

export default Header;
