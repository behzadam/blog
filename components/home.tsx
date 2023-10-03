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
    <header className="min-h-screen relative bg-neutral-900 grid place-content-center">
      <section className="max-w-md px-4 md:px-0">
        <Image
          src="/assets/avatar.png"
          width={45}
          height={45}
          alt="Behzad Ali Mohammad Zad"
          className="rounded-full drop-shadow-xl grayscale opacity-60 mx-auto hover:opacity-100 transition-all"
        />
        <h1 className="tk-ivypresto-display text-neutral-100 text-5xl md:text-6xl text-center tracking-wide">
          <span>Behzad</span>
        </h1>
        <h2 className="text-center tk-ivypresto-display my-2">
          <span className="text-neutral-700">//</span>
          <span className="text-neutral-400 px-2">Ali Mohammad Zad</span>
          <span className="text-neutral-700">//</span>
          <span className="tk-brother-1816 text-xs px-2 text-neutral-400 leading-relaxed">
            Senior Software Engineer
          </span>
          <span className="text-neutral-700">//</span>
        </h2>
        <nav className="tk-brother-1816 text-xs flex justify-between max-w-sm mx-auto transition-colors delay-200 mt-2">
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
        <p className="max-w-md my-4 text-neutral-400 leading-relaxed tk-brother-1816 text-sm">
          I am software engineer with 10 years of professional experience
          developing end-to-end software solutions, primarily in front-end
          engineering. Also, I am a hiker and photography lover.
        </p>
      </section>
    </header>
  );
}
