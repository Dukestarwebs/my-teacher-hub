import { useState } from "react";
import { SUBJECTS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const AiTutor = () => {
  const [subject, setSubject] = useState("Mathematics");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello! I'm your AI Tutor. How can I help you today? Select a subject and ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { role: "user", content: userMsg }]);
    setInput("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    const responses: Record<string, string> = {
      Mathematics: `Great question about ${subject}! Let me explain...\n\nIn mathematics, this concept is fundamental. Think of it like counting mangoes at Nakasero market — you start with the basics and build up. The key formula here involves understanding the relationship between variables.\n\nWould you like me to work through an example?`,
      English: `That's an interesting question about ${subject}!\n\nIn English, we express ideas clearly by following proper grammar rules. Think of sentence structure like building a house — you need a strong foundation (subject + verb) before adding decorations (adjectives, adverbs).\n\nShall I give you a practice exercise?`,
      default: `Great question about ${subject}! Let me help you understand this concept better.\n\nThis is a common topic in Ugandan schools. The key point to remember is that understanding the fundamentals will help you solve more complex problems.\n\nWould you like me to elaborate or try a practice question?`,
    };
    setMessages(m => [...m, { role: "ai", content: responses[subject] || responses.default }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-screen">
      <div className="p-4 border-b border-border bg-card flex items-center gap-3">
        <h1 className="text-lg font-bold text-foreground flex-1">AI Tutor</h1>
        <select value={subject} onChange={e => setSubject(e.target.value)} className="text-sm border border-border rounded-xl px-3 py-1.5 bg-background">
          {SUBJECTS.map(s => <option key={s.id} value={s.name}>{s.icon} {s.name}</option>)}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-line ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-card border border-border text-foreground rounded-bl-md"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-card border border-border rounded-2xl rounded-bl-md p-3 text-sm text-muted-foreground">Thinking...</div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border bg-card">
        <div className="flex gap-2 mb-2 overflow-x-auto">
          {["Explain photosynthesis", "Help me solve equations", "What is the capital of Uganda?"].map(p => (
            <button key={p} onClick={() => setInput(p)} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors">{p}</button>
          ))}
        </div>
        <form onSubmit={e => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <Input placeholder={`Ask about ${subject}...`} value={input} onChange={e => setInput(e.target.value)} className="flex-1" />
          <Button type="submit" size="icon" disabled={loading}><Send className="h-4 w-4" /></Button>
        </form>
      </div>
    </div>
  );
};

export default AiTutor;
