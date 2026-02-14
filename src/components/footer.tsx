import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaDiscord } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

const links = [
  { title: "Home", href: "#" },
  { title: "Register", href: "#" },
  { title: "About", href: "#" },
  { title: "Tracks", href: "#" },
  { title: "Schedule", href: "#" },
  { title: "Sponsors", href: "#" },
];

interface social{
  title : string,
  href : string,
  icon : IconType
}

const socialLinks : social[] = [
  { 
    title: "Twitter", 
    href: "https://x.com/GDG_DCE",
    icon: FaSquareXTwitter
  },
  { 
    title: "Discord", 
    href: "https://discord.gg/zCPbK23X",
    icon: FaDiscord
  },
  { 
    title: "Instagram", 
    href: "https://www.instagram.com/gdg.dce/",
    icon: AiFillInstagram
  },
  { 
    title: "LinkedIn", 
    href: "https://www.linkedin.com/company/gdg-on-campus-dronacharya-college-of-engineering/",
    icon: RxLinkedinLogo
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-16 px-6">
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
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex justify-end">
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