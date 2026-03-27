import { UserPlus, Search, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up with Google in seconds. Tell us about your learning challenges and goals.",
  },
  {
    icon: Search,
    step: "02",
    title: "Find Your Teacher",
    description: "Browse qualified teachers by subject, availability, and ratings. Or chat with our AI Tutor instantly.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Start Learning",
    description: "Attend live seminars, download resources, take exams, and track your progress — all in one place.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Getting started is simple — just three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
