import { Bot, Video, BookOpen } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Tutors",
    description: "Get instant help from AI-powered tutors available 24/7. Ask questions, solve problems, and understand concepts at your own pace.",
    color: "bg-accent text-primary",
  },
  {
    icon: Video,
    title: "Live Seminars",
    description: "Attend live audio and video seminars hosted by experienced Ugandan teachers. Interactive Q&A, real-time learning.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access notes, past papers, and study materials uploaded by verified teachers across all subjects.",
    color: "bg-amber-50 text-amber-600",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Excel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My Teacher combines the best of human teaching and AI technology to give Ugandan students a world-class learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl shadow-sm border border-border p-8 hover:shadow-md hover:border-primary/20 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-6`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
