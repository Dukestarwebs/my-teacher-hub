import { MOCK_EXAM_RESULTS, MOCK_EXAMS } from "@/data/mockData";
import { BarChart3, Award, BookOpen, Video } from "lucide-react";

const Progress = () => {
  const avgScore = MOCK_EXAM_RESULTS.length ? Math.round(MOCK_EXAM_RESULTS.reduce((a, r) => a + r.score, 0) / MOCK_EXAM_RESULTS.length) : 0;

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-xl font-bold text-foreground">Progress & Leaderboard</h1>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Exams Taken", value: MOCK_EXAM_RESULTS.length.toString(), icon: BookOpen, color: "text-primary" },
          { label: "Avg Score", value: `${avgScore}%`, icon: BarChart3, color: "text-info" },
          { label: "Seminars", value: "2", icon: Video, color: "text-warning" },
          { label: "Badges", value: "3", icon: Award, color: "text-primary" },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-2xl border border-border p-4 text-center">
            <s.icon className={`h-5 w-5 mx-auto mb-1 ${s.color}`} />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <section>
        <h2 className="font-semibold text-foreground mb-3">Badges Earned</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { name: "First Exam", emoji: "🎯", desc: "Completed your first exam" },
            { name: "Quick Learner", emoji: "⚡", desc: "Scored above 80% on first try" },
            { name: "Seminar Star", emoji: "🌟", desc: "Attended 2 seminars" },
          ].map(b => (
            <div key={b.name} className="min-w-[160px] bg-accent rounded-2xl p-4 text-center">
              <p className="text-3xl mb-1">{b.emoji}</p>
              <p className="font-medium text-sm text-foreground">{b.name}</p>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-foreground mb-3">Leaderboard — Top Students</h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {[
            { name: "Nakamya Grace", score: 85, rank: 1 },
            { name: "Lubega Brian", score: 78, rank: 2 },
            { name: "Atim Faith", score: 74, rank: 3 },
            { name: "Muwanga Isaac", score: 70, rank: 4 },
            { name: "Namuli Esther", score: 65, rank: 5 },
          ].map(s => (
            <div key={s.rank} className="flex items-center gap-3 p-3 border-b border-border last:border-0">
              <span className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${s.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{s.rank}</span>
              <span className="flex-1 text-sm font-medium text-foreground">{s.name}</span>
              <span className="text-sm font-bold text-primary">{s.score}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Progress;
