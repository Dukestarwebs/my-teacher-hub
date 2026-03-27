import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { MOCK_SEMINARS, MOCK_TEACHERS, MOCK_RESOURCES } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Video, FileText, BookOpen, Brain, Star } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center gap-3">
        <img src={user?.photoURL} alt="" className="h-12 w-12 rounded-full" />
        <div>
          <h1 className="text-xl font-bold text-foreground">{greeting}, {user?.name?.split(" ")[0]}!</h1>
          <p className="text-sm text-muted-foreground">Ready to learn something new today?</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Enrolled", value: "2", icon: Video, color: "text-primary" },
          { label: "Exams Done", value: "2", icon: FileText, color: "text-info" },
          { label: "Resources", value: "4", icon: BookOpen, color: "text-warning" },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-2xl border border-border p-4 text-center">
            <s.icon className={`h-5 w-5 mx-auto mb-1 ${s.color}`} />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* AI Tutor Quick Start */}
      <Link to="/ai-tutor" className="block gradient-hero rounded-2xl p-5 text-primary-foreground">
        <div className="flex items-center gap-3">
          <Brain className="h-8 w-8" />
          <div>
            <h3 className="font-bold text-lg">AI Tutor</h3>
            <p className="text-sm opacity-90">Ask anything about any subject</p>
          </div>
        </div>
      </Link>

      {/* Upcoming Seminars */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">Upcoming Seminars</h2>
          <Link to="/seminars" className="text-sm text-primary font-medium">View All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {MOCK_SEMINARS.filter(s => s.status === "upcoming").map((sem) => (
            <Link to={`/seminars/${sem.id}`} key={sem.id} className="min-w-[260px] bg-card rounded-2xl border border-border p-4 hover:border-primary/30 transition-colors">
              <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">{sem.subject}</span>
              <h3 className="font-semibold mt-2 text-foreground">{sem.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{sem.teacherName}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-bold text-primary">UGX {sem.fee.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">{sem.duration} min</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Teachers */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">Featured Teachers</h2>
          <Link to="/search" className="text-sm text-primary font-medium">Browse All</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {MOCK_TEACHERS.filter(t => t.isApproved).slice(0, 4).map((t) => (
            <Link to={`/teachers/${t.uid}`} key={t.uid} className="bg-card rounded-2xl border border-border p-3 hover:border-primary/30 transition-colors">
              <div className="relative w-fit mx-auto">
                <img src={t.photoURL} alt="" className="h-12 w-12 rounded-full mx-auto" />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${t.isOnline ? "bg-primary animate-pulse-dot" : "bg-muted-foreground/30"}`} />
              </div>
              <p className="text-sm font-medium text-center mt-2 text-foreground">{t.name}</p>
              <p className="text-xs text-center text-muted-foreground">{t.subject}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="h-3 w-3 fill-warning text-warning" />
                <span className="text-xs text-foreground">{t.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
