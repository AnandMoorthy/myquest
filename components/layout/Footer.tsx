import { Globe, Mail, Share2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { withBasePath } from "@/lib/basePath";

const socialLinks = [
  { icon: Share2, href: "#", label: "Share" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "mailto:hello@myquest.live", label: "Email" },
];

const footerLinks = [
  { label: "Privacy", href: withBasePath("/privacy") },
  { label: "Terms", href: withBasePath("/terms") },
  { label: "Contact", href: withBasePath("/#contact") },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo href="#" />
          <p className="max-w-xs text-center text-sm text-foreground/50 sm:text-left">
            Find your people nearby.
          </p>
          <p className="text-sm text-foreground/40">
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
