import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    title: "GitHub",
    url: "https://github.com/behzadam",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/behzadam/",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/behzad_pro",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/behzad.pro?igshid=OGQ5ZDc2ODk2ZA==",
  },
];

export default function Home() {
  return (
    <header className="min-h-screen relative bg-neutral-900 p-4 pt-32 md:p-0 md:place-content-center md:grid space-y-6">
      <figure>
        <div className="grid grid-flow-col items-center">
          <h1 className="tk-ivypresto-display text-neutral-100 text-6xl md:text-8xl flex flex-col tracking-wide">
            <span>Behzad</span>
          </h1>
          <Image
            src="/assets/avatar.jpeg"
            width={80}
            height={80}
            alt="Behzad Ali Mohammad Zad"
            className="rounded-full drop-shadow-xl grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        </div>
        <h2 className="tk-ivypresto-display text-6xl md:text-8xl flex flex-col tracking-wide">
          {" "}
          <span className="text-sm md:text-lg tk-ivypresto-display">
            <span className="text-neutral-700">//</span>
            <span className="text-neutral-400">Ali Mohammad Zad</span>
            <span className="text-neutral-700">//</span>
            <span className="tk-brother-1816 text-xs text-neutral-400">
              Senior Software Engineer
            </span>
          </span>
        </h2>
      </figure>
      <nav className="tk-brother-1816 text-xs space-x-4 transition-colors delay-200 mt-2">
        {socials.map((item) => (
          <a
            key={`nav-${item.title}`}
            href={item.url}
            className="text-green-400 hover:text-green-500 underline underline-offset-4"
            target="_blank"
          >
            {item.title}
          </a>
        ))}
        <Link
          className="text-yellow-400 hover:text-yellow-500 underline underline-offset-4"
          href="/blog"
        >
          Blog in Persian
        </Link>
      </nav>
      <p className="max-w-md my-4 text-neutral-400 leading-relaxed text-sm">
        I am software engineer with 10 years of professional experience
        developing end-to-end software solutions, primarily in front-end
        engineering. Also, I am a hiker and photography lover.
      </p>
    </header>
  );
}
