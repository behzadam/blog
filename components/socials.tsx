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

export default function Socials() {
  return (
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
  );
}
