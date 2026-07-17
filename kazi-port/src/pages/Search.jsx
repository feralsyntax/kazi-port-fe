import { Search as SearchIcon } from "lucide-react";
import Card from "../components/Card";
import Input from "../components/Input";

const results = [
  { name: "Amina Yusuf", role: "Software Engineering Student", focus: "Frontend systems and product design" },
  { name: "Daniel Otieno", role: "Data Science Student", focus: "Analytics and research-driven product work" },
];

function Search() {
  return (
    <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Discover talent</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Search verified student portfolios.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Find students by skill, discipline, or project focus. The experience is ready for recruiter workflows.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
            <SearchIcon size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, skill, or discipline"
              className="w-full border-none bg-transparent text-sm text-slate-700 outline-none"
            />
          </div>

          <div className="mt-8 grid gap-4">
            {results.map((result) => (
              <Card key={result.name} className="p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{result.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{result.role}</p>
                  </div>
                  <p className="text-sm text-slate-500">{result.focus}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
