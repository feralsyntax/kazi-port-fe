import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Code2, FolderGit2, GraduationCap, Search, ShieldCheck } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const features = [
  {
    title: "Evidence-based profiles",
    description: "Show projects, certificates, and achievements with confidence.",
    icon: FolderGit2,
  },
  {
    title: "Verified credentials",
    description: "Create trust with institutions and employers through structured proof.",
    icon: ShieldCheck,
  },
  {
    title: "Built for opportunity",
    description: "Support internships, placements, and recruiter discovery from day one.",
    icon: Building2,
  },
];

const highlights = [
  { label: "Portfolio sections", value: "6+" },
  { label: "Students onboarded", value: "1k+" },
  { label: "Recruiter matches", value: "24/7" },
];

function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 rounded-full bg-[#00A884]/10 blur-3xl" />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00A884]/20 bg-[#E8F8F4] px-3 py-1 text-sm font-medium text-[#008A6E]">
              <GraduationCap size={16} />
              A professional digital career passport
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Verified Digital Career Passport.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              KaziPort helps university students present real work, verified achievements, and professional growth in one polished portfolio that employers can trust.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register">
                <Button className="w-full sm:w-auto">Create my portfolio</Button>
              </Link>
              <Link to="/search">
                <Button variant="secondary" className="w-full sm:w-auto">
                  <Search size={16} className="mr-2" />
                  Explore portfolios
                </Button>
              </Link>
            </div>
          </div>

          <Card className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00A884]">Student profile</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Amina Yusuf</h2>
              </div>
              <div className="rounded-2xl bg-slate-100 p-3 text-[#00A884]">
                <Code2 size={24} />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Portfolio completion</span>
                  <span className="text-sm font-semibold text-slate-900">87%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[87%] rounded-full bg-[#00A884]" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-3 text-center">
                    <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why students use it"
          title="Professional, structured, and ready for opportunity."
          description="Replace scattered files and outdated CVs with a living profile that reflects your work and growth."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F8F4] text-[#00A884]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00A884]">Built for the future</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Prepare confidently for internships, placements, and professional growth.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                From academic excellence to project work and certifications, KaziPort gives students one trusted place to demonstrate their readiness.
              </p>
            </div>
            <Link to="/register">
              <Button>
                Get started
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
