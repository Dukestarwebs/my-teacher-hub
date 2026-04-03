import { Video, BookOpen, FileText } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Seminars",
    description: "Attend live audio and video seminars hosted by experienced Ugandan teachers. Interactive Q&A, real-time learning.",
    color: "bg-accent text-primary",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access notes, past papers, and study materials uploaded by verified teachers across all subjects.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FileText,
    title: "Exams & Tests",
    description: "Take practice exams, get instant results, and track your progress across all subjects.",
    color: "bg-amber-50 text-amber-600",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-14 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Excel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
            My Teacher combines the best of human teaching to give Ugandan students a world-class learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8 hover:shadow-md hover:border-primary/20 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${f.color} flex items-center justify-center mb-4 md:mb-6`}>
                <f.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{f.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
