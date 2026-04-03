import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const openings = [
  {
    title: "Full Stack Developer",
    location: "Kampala, Uganda (Remote OK)",
    type: "Full-time",
    description: "Help us build and scale the My Teacher platform. Experience with React, Node.js, and Firebase required.",
  },
  {
    title: "Content & Curriculum Specialist",
    location: "Kampala, Uganda",
    type: "Full-time",
    description: "Curate and review educational content, work with teachers to ensure quality across all subjects.",
  },
  {
    title: "Community Manager",
    location: "Kampala, Uganda",
    type: "Full-time",
    description: "Engage with our student and teacher community, handle support, and drive platform adoption.",
  },
  {
    title: "Marketing & Growth Lead",
    location: "Kampala, Uganda (Hybrid)",
    type: "Full-time",
    description: "Drive user acquisition across Uganda through digital campaigns, school partnerships, and community outreach.",
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Careers at My Teacher</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Join our mission to transform education in Uganda. We're looking for passionate people who want to make a difference.
        </p>

        <div className="bg-accent rounded-2xl p-6 border border-border mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-2">Why Work With Us?</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Make a real impact on education in Uganda</li>
            <li>• Work with a passionate, mission-driven team</li>
            <li>• Flexible and remote-friendly work culture</li>
            <li>• Competitive compensation and growth opportunities</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-4">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job) => (
            <div key={job.title} className="bg-card rounded-2xl border border-border p-5 md:p-6 hover:shadow-md hover:border-primary/20 transition-all">
              <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
              <Button size="sm" variant="outline" onClick={() => window.location.href = "mailto:careers@myteacher.ug?subject=Application: " + job.title}>
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-muted-foreground">
          <p className="text-sm">Don't see a role that fits? Send your CV to</p>
          <a href="mailto:careers@myteacher.ug" className="text-primary font-medium hover:underline">careers@myteacher.ug</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
