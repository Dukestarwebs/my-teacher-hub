import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const CreateSeminar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", date: "", time: "", duration: "60", fee: "", deadline: "", maxParticipants: "30" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Seminar Created!", description: "Your seminar has been published." });
    navigate("/teacher/seminars");
  };

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-foreground mb-4">Create Seminar</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><Label>Title</Label><Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required /></div>
        <div><Label>Description</Label><Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /></div>
        <div><Label>Subject</Label><Input value={user?.subject || ""} disabled className="bg-muted" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Date</Label><Input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required /></div>
          <div><Label>Time</Label><Input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} required /></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Duration (min)</Label><Input type="number" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} /></div>
          <div><Label>Max Participants</Label><Input type="number" value={form.maxParticipants} onChange={e => setForm({ ...form, maxParticipants: e.target.value })} /></div>
        </div>
        <div><Label>Registration Fee (UGX)</Label><Input type="number" value={form.fee} onChange={e => setForm({ ...form, fee: e.target.value })} required /></div>
        <div><Label>Registration Deadline</Label><Input type="datetime-local" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} required /></div>
        <Button type="submit" className="w-full">Create Seminar</Button>
      </form>
    </div>
  );
};

export default CreateSeminar;
