import { Calculator, BookText, Globe, Leaf, FlaskConical, Atom, History } from "lucide-react";

const subjects = [
  { name: "Mathematics", icon: Calculator, color: "bg-blue-50 text-blue-600 border-blue-100" },
  { name: "English", icon: BookText, color: "bg-rose-50 text-rose-600 border-rose-100" },
  { name: "Geography", icon: Globe, color: "bg-teal-50 text-teal-600 border-teal-100" },
  { name: "Biology", icon: Leaf, color: "bg-green-50 text-green-600 border-green-100" },
  { name: "Chemistry", icon: FlaskConical, color: "bg-purple-50 text-purple-600 border-purple-100" },
  { name: "Physics", icon: Atom, color: "bg-orange-50 text-orange-600 border-orange-100" },
  { name: "History", icon: History, color: "bg-amber-50 text-amber-600 border-amber-100" },
];

const SubjectsSection = () => {
  return (
    <section id="subjects" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Popular <span className="text-primary">Subjects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-lg">
            Find expert teachers across Uganda's core curriculum subjects.
          </p>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
          {subjects.map((s) => (
            <div
              key={s.name}
              className={`flex-shrink-0 snap-start flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-2xl border ${s.color} hover:shadow-md transition-all duration-200 cursor-pointer min-w-[110px] md:min-w-[140px]`}
            >
              <s.icon className="h-7 w-7 md:h-8 md:w-8" />
              <span className="text-xs md:text-sm font-semibold whitespace-nowrap">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
