import { BadgeCheck, Globe, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Students", href: "#" },
  { label: "Employers", href: "#" },
  { label: "Contact", href: "#" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F4F7FC]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">KaziPort</p>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            Verified portfolios for students, recruiters, and universities.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600">
            <BadgeCheck size={16} />
          </a>
          <a href="#" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600">
            <Globe size={16} />
          </a>
          <a href="#" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
