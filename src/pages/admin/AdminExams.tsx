import { MOCK_EXAMS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminExams = () => (
  <div className="p-4 md:p-6 space-y-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-foreground">Exam Management</h1>
      <Button><Plus className="h-4 w-4 mr-1" />Create Exam</Button>
    </div>
    <div className="space-y-2">
      {MOCK_EXAMS.map(e => (
        <div key={e.id} className="bg-card rounded-xl border border-border p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">{e.title}</p>
            <p className="text-xs text-muted-foreground">{e.subject} · {e.questions.length} questions · {e.duration} min · Pass: {e.passMark}%</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Edit</Button>
            <Button size="sm" variant="ghost" className="text-destructive">Delete</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AdminExams;
