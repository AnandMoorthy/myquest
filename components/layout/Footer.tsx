import { Globe, Mail, Share2 } from "lucide-react";

const socialLinks = [
  { icon: Share2, href: "#", label: "Share" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "#", label: "Email" },
];

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <a href="#" className="flex items-center gap-2 font-bold text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-white">
              MQ
            </span>
            <span className="text-lg">
              My<span className="text-primary">Quest</span>
            </span>
          </a>
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} MyQuest. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer links" className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/50 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-lg p-2 text-foreground/50 transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
