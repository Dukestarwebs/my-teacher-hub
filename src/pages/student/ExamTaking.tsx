import { useParams, useNavigate } from "react-router-dom";
import { MOCK_EXAMS } from "@/data/mockData";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ExamTaking = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const exam = MOCK_EXAMS.find(e => e.id === examId);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (exam) {
      setAnswers(new Array(exam.questions.length).fill(null));
      setTimeLeft(exam.duration * 60);
    }
  }, [exam]);

  useEffect(() => {
    if (timeLeft <= 0 && exam && !submitted) { handleSubmit(); return; }
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, submitted]);

  if (!exam) return <div className="p-6 text-center text-muted-foreground">Exam not found</div>;

  const handleSubmit = () => {
    setSubmitted(true);
    const score = answers.reduce((acc, a, i) => acc + (a === exam.questions[i].correctAnswer ? 1 : 0), 0);
    const pct = Math.round((score / exam.questions.length) * 100);
    navigate(`/exams/${examId}/results`, { state: { score: pct, answers, passed: pct >= exam.passMark } });
  };

  const q = exam.questions[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">Question {current + 1} of {exam.questions.length}</span>
        <span className={`text-sm font-bold px-3 py-1 rounded-full ${timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-accent text-foreground"}`}>
          {mins}:{secs.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="w-full bg-border rounded-full h-1.5 mb-6">
        <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${((current + 1) / exam.questions.length) * 100}%` }} />
      </div>

      <div className="bg-card rounded-2xl border border-border p-5 mb-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">{q.question}</h2>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => { const a = [...answers]; a[current] = i; setAnswers(a); }}
              className={`w-full text-left p-3 rounded-xl border text-sm transition-colors ${answers[current] === i ? "border-primary bg-accent text-primary font-medium" : "border-border hover:border-primary/30 text-foreground"}`}>
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" disabled={current === 0} onClick={() => setCurrent(c => c - 1)} className="flex-1">Previous</Button>
        {current < exam.questions.length - 1 ? (
          <Button onClick={() => setCurrent(c => c + 1)} className="flex-1">Next</Button>
        ) : (
          <Button onClick={() => setShowConfirm(true)} className="flex-1">Submit Exam</Button>
        )}
      </div>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader><DialogTitle>Submit Exam?</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">Are you sure you want to submit? You answered {answers.filter(a => a !== null).length} of {exam.questions.length} questions.</p>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" onClick={() => setShowConfirm(false)} className="flex-1">Go Back</Button>
            <Button onClick={handleSubmit} className="flex-1">Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExamTaking;
