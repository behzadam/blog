import Link from "next/link";

const Intro = () => {
  return (
    <section>
      <h2 className="font-bold my-8 text-right max-w-2xl flex items-center">
        <Link
          href="/"
          className="hover:underline text-neutral-400 hover:text-neutral-900 transition-colors delay-100 underline-offset-4"
        >
          صفحه اصلی
        </Link>
        <span className="text-neutral-300 px-1">/</span>
        <span className="text-neutral-700">یادداشت ها</span>
      </h2>
      <h1 className="text-xl md:text-4xl font-bold">یادداشت های روزانه</h1>
    </section>
  );
};

export default Intro;
