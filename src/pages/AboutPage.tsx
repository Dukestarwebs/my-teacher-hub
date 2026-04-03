import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About My Teacher</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            <span className="text-foreground font-semibold">My Teacher</span> is Uganda's leading educational coaching platform, founded by <span className="text-foreground font-semibold">Nakintu Sylvia</span> with a mission to make quality education accessible to every student across Uganda.
          </p>

          <div className="bg-accent rounded-2xl p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
            <p>To bridge the gap between students and qualified teachers by leveraging technology, making world-class education available regardless of location or background.</p>
          </div>

          <h2 className="text-xl font-semibold text-foreground pt-4">What We Do</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Live Seminars:</strong> Students attend interactive audio and video seminars hosted by experienced Ugandan teachers.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Resource Library:</strong> Access notes, past papers, and study materials uploaded by verified teachers across all subjects.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Exams & Testing:</strong> Practice with subject-specific exams, get instant results, and track your progress over time.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Teacher Marketplace:</strong> Browse and connect with qualified, vetted teachers across Uganda's core curriculum.</span>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground pt-4">Our Story</h2>
          <p>
            Founded in Kampala, My Teacher was born from the belief that every Ugandan student deserves access to great teaching. Many students in rural and peri-urban areas struggle to find qualified teachers — we're here to change that.
          </p>
          <p>
            By connecting students with approved, experienced teachers through live seminars and rich study materials, we're building a community where learning knows no boundaries.
          </p>

          <div className="bg-card rounded-2xl border border-border p-6 mt-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: "Quality", desc: "Every teacher is verified and approved before joining." },
                { title: "Accessibility", desc: "Affordable learning for students across Uganda." },
                { title: "Community", desc: "Building connections between students and teachers." },
                { title: "Innovation", desc: "Using technology to enhance the learning experience." },
              ].map(v => (
                <div key={v.title} className="space-y-1">
                  <p className="font-semibold text-foreground">{v.title}</p>
                  <p className="text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
