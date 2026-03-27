import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const attendanceData = [
  { month: "Jan", students: 120 }, { month: "Feb", students: 180 }, { month: "Mar", students: 250 },
];
const subjectData = [
  { name: "Math", value: 30 }, { name: "English", value: 22 }, { name: "Physics", value: 18 },
  { name: "Biology", value: 15 }, { name: "Chemistry", value: 10 }, { name: "Others", value: 5 },
];
const COLORS = ["hsl(142,72%,29%)", "hsl(217,91%,60%)", "hsl(38,92%,50%)", "hsl(0,72%,51%)", "hsl(280,60%,50%)", "hsl(220,9%,46%)"];

const engagementData = [
  { week: "W1", sessions: 45 }, { week: "W2", sessions: 62 }, { week: "W3", sessions: 78 }, { week: "W4", sessions: 95 },
];

const AdminReports = () => (
  <div className="p-4 md:p-6 space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Reports & Analytics</h1>
      <Button variant="outline" size="sm" onClick={() => toast({ title: "CSV exported!" })}><Download className="h-4 w-4 mr-1" />Export CSV</Button>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-card rounded-2xl border border-border p-4">
        <h3 className="font-semibold text-foreground mb-3">Student Engagement</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={engagementData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="week" /><YAxis /><Tooltip /><Line type="monotone" dataKey="sessions" stroke="hsl(142,72%,29%)" strokeWidth={2} /></LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card rounded-2xl border border-border p-4">
        <h3 className="font-semibold text-foreground mb-3">Subject Popularity</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart><Pie data={subjectData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value" label={({ name }) => name}>
            {subjectData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie><Tooltip /></PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card rounded-2xl border border-border p-4 md:col-span-2">
        <h3 className="font-semibold text-foreground mb-3">Seminar Attendance</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={attendanceData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="students" fill="hsl(142,72%,29%)" radius={[8, 8, 0, 0]} /></BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <section>
      <h2 className="font-semibold text-foreground mb-3">Top Teachers by Rating</h2>
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        {[
          { name: "Okello James", subject: "Physics", rating: 4.9 },
          { name: "Ssempala David", subject: "Mathematics", rating: 4.8 },
          { name: "Namutebi Sarah", subject: "English", rating: 4.6 },
          { name: "Apio Rebecca", subject: "Biology", rating: 4.5 },
        ].map((t, i) => (
          <div key={i} className="flex items-center justify-between p-3 border-b border-border last:border-0">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i + 1}</span>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.subject}</p>
              </div>
            </div>
            <span className="text-sm font-bold text-primary">⭐ {t.rating}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default AdminReports;
