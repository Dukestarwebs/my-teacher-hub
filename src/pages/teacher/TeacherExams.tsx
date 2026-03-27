import { useState } from "react";
import { MOCK_EXAMS } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TeacherExams = () => {
  const { user } = useAuth();
  const [showCreate, setShowCreate] = useState(false);
  const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], correctAnswer: 0, explanation: "" }]);
  const exams = MOCK_EXAMS.filter(e => e.teacherId === user?.uid);

  const addQuestion = () => setQuestions(q => [...q, { question: "", options: ["", "", "", ""], correctAnswer: 0, explanation: "" }]);

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">My Exams</h1>
        <Button onClick={() => setShowCreate(true)}><Plus className="h-4 w-4 mr-1" />Create</Button>
      </div>
      <div className="space-y-3">
        {exams.map(e => (
          <div key={e.id} className="bg-card rounded-2xl border border-border p-4">
            <h3 className="font-semibold text-foreground">{e.title}</h3>
            <p className="text-xs text-muted-foreground">{e.subject} · {e.questions.length} questions · {e.duration} min</p>
          </div>
        ))}
      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Create Exam</DialogTitle></DialogHeader>
          <form onSubmit={e => { e.preventDefault(); setShowCreate(false); toast({ title: "Exam published!" }); }} className="space-y-4">
            <div><Label>Title</Label><Input required /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Duration (min)</Label><Input type="number" defaultValue="30" /></div>
              <div><Label>Pass Mark (%)</Label><Input type="number" defaultValue="60" /></div>
            </div>
            {questions.map((q, qi) => (
              <div key={qi} className="bg-muted rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Question {qi + 1}</span>
                  {qi > 0 && <button type="button" onClick={() => setQuestions(qs => qs.filter((_, i) => i !== qi))}><Trash2 className="h-4 w-4 text-destructive" /></button>}
                </div>
                <Textarea placeholder="Question text" className="bg-background" />
                {q.options.map((_, oi) => <Input key={oi} placeholder={`Option ${oi + 1}`} className="bg-background" />)}
                <Input placeholder="Explanation" className="bg-background" />
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addQuestion} className="w-full">+ Add Question</Button>
            <Button type="submit" className="w-full">Publish Exam</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeacherExams;
