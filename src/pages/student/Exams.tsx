import { Link } from "react-router-dom";
import { MOCK_EXAMS, MOCK_EXAM_RESULTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, CheckCircle, XCircle } from "lucide-react";

const Exams = () => {
  return (
    <div className="p-4 md:p-6 space-y-4">
      <h1 className="text-xl font-bold text-foreground">Exams & Tests</h1>
      <Tabs defaultValue="available">
        <TabsList className="w-full">
          <TabsTrigger value="available" className="flex-1">Available Exams</TabsTrigger>
          <TabsTrigger value="results" className="flex-1">My Results</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="mt-4 space-y-3">
          {MOCK_EXAMS.map(ex => (
            <div key={ex.id} className="bg-card rounded-2xl border border-border p-4">
              <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">{ex.subject}</span>
              <h3 className="font-semibold text-foreground mt-2">{ex.title}</h3>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span>{ex.questions.length} questions</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{ex.duration} min</span>
                <span>Pass: {ex.passMark}%</span>
              </div>
              <Button className="mt-3 w-full" asChild><Link to={`/exams/${ex.id}`}>Start Exam</Link></Button>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="results" className="mt-4 space-y-3">
          {MOCK_EXAM_RESULTS.map(r => {
            const exam = MOCK_EXAMS.find(e => e.id === r.examId);
            return (
              <div key={r.id} className="bg-card rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{exam?.title}</h3>
                    <p className="text-xs text-muted-foreground">{exam?.subject} · {new Date(r.completedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">{r.score}%</p>
                    {r.passed ? <span className="flex items-center gap-1 text-xs text-primary"><CheckCircle className="h-3 w-3" />Passed</span> : <span className="flex items-center gap-1 text-xs text-destructive"><XCircle className="h-3 w-3" />Failed</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Exams;
