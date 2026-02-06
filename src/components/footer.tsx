import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Register",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Tracks",
    href: "#",
  }
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto block size-fit text-xl"
        >
          <div className="flex">
            <span className="text-xl font-mono">Code</span>
            <p className="text-xl bg-neutral-200 text-black px-2 rounded-full">
              &
            </p>
            <span className="text-xl font-mono">Chaos</span>
          </div>
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} GDG DCE, All rights reserved
        </span>
      </div>
    </footer>
  );
}
