import { Link, NavLink } from "react-router-dom";
import { Search, UserCircle2, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Get Paid", to: "/checkout" },
];

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00A884] text-white">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-lg font-semibold">KaziPort</p>
            <p className="text-xs text-slate-500">Digital Career Passport</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-[#00A884]" : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#00A884]/30 hover:text-[#00A884]"
            aria-label="Search portfolios"
          >
            <Search size={18} />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#00A884]/30 hover:text-[#00A884]"
          >
            <UserCircle2 size={16} />
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
