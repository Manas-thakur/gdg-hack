import Link from "next/link";

const links = [
  { title: "Home", href: "#" },
  { title: "Register", href: "#" },
  { title: "About", href: "#" },
  { title: "Tracks", href: "#" },
  { title: "Schedule", href: "#" },
  { title: "Sponsors", href: "#" },
];

const socialLinks = [
  { 
    title: "Twitter", 
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )
  },
  { 
    title: "GitHub", 
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Discord", 
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  },
  { 
    title: "LinkedIn", 
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    )
  },
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              aria-label="go home"
              className="inline-block group"
            >
              <div className="flex items-center gap-1">
                <span className="text-2xl font-mono text-white">
                  Code
                </span>
                <span className="text-2xl bg-white text-black px-2 rounded-full">
                  &
                </span>
                <span className="text-2xl font-mono text-white">
                  Chaos
                </span>
              </div>
            </Link>
            
            <p className="text-neutral-400 max-w-sm text-sm leading-relaxed">
              Join us for 24 hours of innovation, coding, and creative chaos. 
              Build the future with fellow developers and designers.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.title}
                  href={social.href}
                  className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all duration-300 hover:scale-110"
                  aria-label={social.title}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
                Event
              </h3>
              <ul className="space-y-3">
                {links.slice(0, 3).map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="space-y-3">
                {links.slice(3).map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+919650376167"
                    className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                  >
                    +91 96503 76167
                  </a>
                </li>
                <li className="text-neutral-400 text-sm">
                  GDG DCE
                </li>
                <li className="text-neutral-400 text-sm">
                  Gurugram, Haryana
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Code & Chaos. All rights reserved.
          </span>
          
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}