import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anita Nakamya",
    role: "S4 Student, Kampala",
    text: "My Teacher changed how I study! The AI tutor helped me understand chemistry concepts I'd struggled with for months.",
    rating: 5,
  },
  {
    name: "Brian Ochieng",
    role: "S6 Student, Jinja",
    text: "The live seminars are amazing. I can interact with the best teachers in Uganda from my home. My physics grades improved from a D to a B!",
    rating: 5,
  },
  {
    name: "Grace Namukasa",
    role: "Teacher, Maths",
    text: "As a teacher, this platform lets me reach students across the country. The tools are easy to use and the support team is wonderful.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Hear from students and teachers across Uganda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl shadow-sm border border-border p-8 hover:shadow-md transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
