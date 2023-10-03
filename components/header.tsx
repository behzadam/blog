import Link from "next/link";

const Header = () => {
  return (
    <h2 className="font-bold my-8 text-right max-w-2xl flex items-center">
      <Link
        href="/"
        className="hover:underline text-neutral-700 hover:text-neutral-900 transition-colors delay-100 underline-offset-4"
      >
        صفحه اصلی
      </Link>
      <span className="text-neutral-300 px-1">/</span>
      <Link
        href="/blog"
        className="hover:underline text-neutral-700 hover:text-neutral-900 transition-colors delay-100 underline-offset-4"
      >
        بازگشت به یادداشت ها
      </Link>
    </h2>
  );
};

export default Header;
