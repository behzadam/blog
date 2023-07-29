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
];

export default function Home() {
  return (
    <header className="bg-gainsboro min-h-screen relative">
      <section className="container mx-auto max-w-screen-lg pt-10 px-4">
        <h1 className="tk-ivypresto-display text-6xl md:text-8xl flex flex-col tracking-wide">
          <span>Behzad</span>
          <span className="text-sm md:text-lg tk-ivypresto-display">
            <span className="text-neutral-400">//</span>
            <span>Ali Mohammad Zad</span>
            <span className="text-neutral-400">//</span>
            <span className="tk-brother-1816 text-xs">
              Senior Software Engineer
            </span>
          </span>
        </h1>
        <nav className="tk-brother-1816 text-xs space-x-4 transition-colors delay-200 mt-2">
          {socials.map((item) => (
            <a
              href={item.url}
              className="text-amber-800 hover:text-blue-900 underline underline-offset-4"
              target="_blank"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </section>
    </header>
  );
}
