import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs md:text-sm font-medium">
              <GraduationCap className="h-4 w-4" />
              Uganda's #1 Learning Platform
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
              Learn from Uganda's{" "}
              <span className="text-primary">Best Teachers</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Connect with qualified teachers, attend live seminars, 
              and excel in your studies — all from one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/login">
                  Get Started <ArrowRight className="h-5 w-5 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link to="/login">Browse Teachers</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 md:gap-6 pt-2 md:pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">2,500+ Students</p>
                <p className="text-xs text-muted-foreground">are already learning</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Students learning together" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-3 -left-2 md:-bottom-4 md:-left-4 bg-card rounded-2xl shadow-lg border border-border p-3 md:p-4 animate-slide-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-foreground">Expert Teachers</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Verified & qualified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
