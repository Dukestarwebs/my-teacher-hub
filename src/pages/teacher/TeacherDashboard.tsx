import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { MOCK_SEMINARS, MOCK_REVIEWS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Users, Video, DollarSign, Star } from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [isOnline, setIsOnline] = useState(user?.isOnline ?? true);
  const seminars = MOCK_SEMINARS.filter(s => s.teacherId === user?.uid);
  const reviews = MOCK_REVIEWS.filter(r => r.teacherId === user?.uid);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={user?.photoURL} alt="" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold text-foreground">{greeting}, {user?.name?.split(" ")[0]}!</h1>
            <p className="text-sm text-muted-foreground">{user?.subject} Teacher</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{isOnline ? "Available" : "Offline"}</span>
          <Switch checked={isOnline} onCheckedChange={setIsOnline} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Students", value: "12", icon: Users },
          { label: "Seminars", value: seminars.length.toString(), icon: Video },
          { label: "Earnings", value: "UGX 350K", icon: DollarSign },
          { label: "Rating", value: "4.8", icon: Star },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-2xl border border-border p-4 text-center">
            <s.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
            <p className="text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Upcoming Seminars</h2>
          <Link to="/teacher/seminars" className="text-sm text-primary">View All</Link>
        </div>
        <div className="space-y-2">
          {seminars.filter(s => s.status === "upcoming").map(s => (
            <div key={s.id} className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{new Date(s.scheduledAt).toLocaleDateString()} · {s.registeredStudents.length} registered</p>
              </div>
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">Upcoming</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-foreground mb-3">Recent Reviews</h2>
        <div className="space-y-2">
          {reviews.slice(0, 3).map(r => (
            <div key={r.id} className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground">{r.studentName}</span>
                <div className="flex">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3 w-3 fill-warning text-warning" />)}</div>
              </div>
              <p className="text-sm text-muted-foreground">{r.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
