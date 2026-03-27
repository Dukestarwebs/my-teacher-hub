import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { MOCK_SEMINARS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const TeacherSeminars = () => {
  const { user } = useAuth();
  const seminars = MOCK_SEMINARS.filter(s => s.teacherId === user?.uid);

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">My Seminars</h1>
        <Button asChild><Link to="/teacher/seminars/create"><Plus className="h-4 w-4 mr-1" />Create</Link></Button>
      </div>
      <div className="space-y-3">
        {seminars.map(s => (
          <div key={s.id} className="bg-card rounded-2xl border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{new Date(s.scheduledAt).toLocaleDateString()} · {s.duration} min</p>
                <p className="text-xs text-muted-foreground mt-1">{s.registeredStudents.length}/{s.maxParticipants} registered</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${s.status === "live" ? "bg-destructive/10 text-destructive animate-pulse" : s.status === "upcoming" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                {s.status === "live" ? "🔴 LIVE" : s.status.charAt(0).toUpperCase() + s.status.slice(1)}
              </span>
            </div>
            <div className="flex gap-2 mt-3">
              {s.status === "upcoming" && <Button size="sm">Start</Button>}
              {s.status === "upcoming" && <Button size="sm" variant="outline">Cancel</Button>}
            </div>
          </div>
        ))}
        {seminars.length === 0 && <p className="text-center text-muted-foreground py-8">No seminars yet. Create your first one!</p>}
      </div>
    </div>
  );
};

export default TeacherSeminars;
