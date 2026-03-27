import { useParams, useLocation, Link } from "react-router-dom";
import { MOCK_EXAMS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const ExamResults = () => {
  const { examId } = useParams();
  const location = useLocation();
  const exam = MOCK_EXAMS.find(e => e.id === examId);
  const state = location.state as { score: number; answers: (number | null)[]; passed: boolean } | null;

  const score = state?.score ?? 80;
  const passed = state?.passed ?? true;
  const answers = state?.answers ?? [];

  if (!exam) return <div className="p-6 text-center text-muted-foreground">Exam not found</div>;

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
      <div className="bg-card rounded-2xl border border-border p-6 text-center">
        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
          <svg className="w-24 h-24 -rotate-90">
            <circle cx="48" cy="48" r="40" strokeWidth="8" fill="none" className="stroke-border" />
            <circle cx="48" cy="48" r="40" strokeWidth="8" fill="none" strokeDasharray={251} strokeDashoffset={251 - (251 * score) / 100} strokeLinecap="round" className={passed ? "stroke-primary" : "stroke-destructive"} />
          </svg>
          <span className="absolute text-2xl font-bold text-foreground">{score}%</span>
        </div>
        {passed ? (
          <>
            <div className="flex items-center justify-center gap-2 text-primary"><CheckCircle className="h-5 w-5" /><span className="font-bold">Passed!</span></div>
            <p className="text-sm text-muted-foreground mt-1">Well done! Keep it up!</p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center gap-2 text-destructive"><XCircle className="h-5 w-5" /><span className="font-bold">Failed</span></div>
            <p className="text-sm text-muted-foreground mt-1">Keep practicing, you'll get there!</p>
          </>
        )}
      </div>

      <div className="space-y-3">
        <h2 className="font-semibold text-foreground">Question Review</h2>
        {exam.questions.map((q, i) => {
          const studentAns = answers[i];
          const isCorrect = studentAns === q.correctAnswer;
          return (
            <div key={i} className={`bg-card rounded-xl border p-4 ${isCorrect ? "border-primary/30" : "border-destructive/30"}`}>
              <p className="font-medium text-foreground text-sm">{i + 1}. {q.question}</p>
              <p className="text-xs mt-1"><span className={isCorrect ? "text-primary" : "text-destructive"}>Your answer: {studentAns !== null ? q.options[studentAns] : "Not answered"}</span></p>
              {!isCorrect && <p className="text-xs text-primary">Correct: {q.options[q.correctAnswer]}</p>}
              <p className="text-xs text-muted-foreground mt-1">{q.explanation}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        {!passed && <Button asChild className="flex-1"><Link to={`/exams/${examId}`}>Retry Exam</Link></Button>}
        <Button variant="outline" asChild className="flex-1"><Link to="/exams">Back to Exams</Link></Button>
      </div>
    </div>
  );
};

export default ExamResults;
