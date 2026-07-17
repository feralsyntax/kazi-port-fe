import { Briefcase, GraduationCap, FolderGit2, Sparkles } from "lucide-react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const items = [
  { title: "Projects uploaded", value: "4", icon: FolderGit2 },
  { title: "Certifications", value: "2", icon: GraduationCap },
  { title: "Applications", value: "7", icon: Briefcase },
];

function Dashboard() {
  return (
    <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Dashboard"
          title="Your career profile is taking shape."
          description="Track your progress, polish your story, and keep your portfolio ready for opportunity."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F8F4] text-[#00A884]">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-sm font-medium text-slate-500">{item.title}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-blue-600">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Next best step</h3>
                <p className="text-sm text-slate-600">Add a recent project to strengthen your portfolio evidence.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Public visibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Keep your portfolio discoverable for recruiters and academic reviewers.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
