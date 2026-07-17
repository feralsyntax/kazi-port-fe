import { Briefcase, GraduationCap, Award, Mail, MapPin } from "lucide-react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const skills = ["React", "Django", "UI Systems", "Product Thinking"];
const projects = [
  { title: "Community Learning Hub", description: "Built a student resource portal with responsive design and improved access." },
  { title: "Campus Event Platform", description: "Designed a registration flow for university events and internship fairs." },
];

function Portfolio() {
  return (
    <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Public portfolio</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Amina Yusuf
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Computer Science student building practical software systems and thoughtful digital experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                <Mail size={16} className="text-[#00A884]" />
                amina@kaziport.dev
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                <MapPin size={16} className="text-[#00A884]" />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card>
            <SectionTitle
              eyebrow="Skills"
              title="Strengths and focus areas"
              description="A curated view of the capabilities that matter for modern teams."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <SectionTitle
              eyebrow="Experience"
              title="Projects and evidence"
              description="Examples of thoughtful execution and clear professional growth."
            />
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Briefcase size={16} />
                    <p className="font-semibold text-slate-900">{project.title}</p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{project.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Education</h3>
                <p className="text-sm text-slate-600">BSc Computer Science, 2027</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Award size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Awards</h3>
                <p className="text-sm text-slate-600">Dean’s List and Innovation Challenge Finalist</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
