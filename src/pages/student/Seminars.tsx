import { useState } from "react";
import { Link } from "react-router-dom";
import { MOCK_SEMINARS, SUBJECTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Video, Clock, Users } from "lucide-react";

const Seminars = () => {
  const [filter, setFilter] = useState("");
  const seminars = MOCK_SEMINARS.filter(s => !filter || s.subject === filter);

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-bold text-foreground">Live Seminars</h1>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button onClick={() => setFilter("")} className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${!filter ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>All</button>
        {SUBJECTS.map(s => (
          <button key={s.id} onClick={() => setFilter(s.name)} className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${filter === s.name ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>{s.name}</button>
        ))}
      </div>

      <div className="space-y-3">
        {seminars.map(sem => (
          <Link to={`/seminars/${sem.id}`} key={sem.id} className="block bg-card rounded-2xl border border-border p-4 hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">{sem.subject}</span>
                  {sem.status === "live" && <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full animate-pulse">🔴 LIVE</span>}
                </div>
                <h3 className="font-semibold text-foreground">{sem.title}</h3>
                <p className="text-sm text-muted-foreground">{sem.teacherName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{sem.duration} min</span>
              <span className="flex items-center gap-1"><Users className="h-3 w-3" />{sem.registeredStudents.length}/{sem.maxParticipants}</span>
              <span className="flex items-center gap-1"><Video className="h-3 w-3" />{sem.streamType}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-bold text-primary">UGX {sem.fee.toLocaleString()}</span>
              {sem.status === "live" ? <Button size="sm">Join Live</Button> : <Button size="sm">Register</Button>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Seminars;
