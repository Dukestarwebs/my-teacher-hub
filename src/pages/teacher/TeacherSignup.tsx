import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SUBJECTS } from "@/data/mockData";
import logo from "@/assets/logo.png";
import { toast } from "@/hooks/use-toast";

const TeacherSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", username: "", phone: "", subject: "", bio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) { toast({ title: "Passwords don't match", variant: "destructive" }); return; }
    toast({ title: "Account created!", description: "Your account is pending approval." });
    navigate("/pending-approval");
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-lg border border-border p-8 animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="My Teacher" className="h-14 w-14 mb-3" />
          <h1 className="text-2xl font-bold text-foreground">Join as a Teacher</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div><Label>Full Name</Label><Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></div>
          <div><Label>Email</Label><Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><Label>Password</Label><Input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required /></div>
            <div><Label>Confirm</Label><Input type="password" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} required /></div>
          </div>
          <div><Label>Username</Label><Input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} required /></div>
          <div><Label>Phone (07XXXXXXXX)</Label><Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required /></div>
          <div>
            <Label>Subject Specialty</Label>
            <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="">Select subject...</option>
              {SUBJECTS.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div><Label>Bio (optional)</Label><Textarea value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} /></div>
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
        <p className="text-sm text-center text-muted-foreground mt-4">Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link></p>
      </div>
    </div>
  );
};

export default TeacherSignup;
