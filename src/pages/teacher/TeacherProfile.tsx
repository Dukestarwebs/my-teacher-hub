import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const TeacherProfilePage = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [phone, setPhone] = useState(user?.phone || "");

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-xl font-bold text-foreground">Profile Settings</h1>
      <div className="flex items-center gap-4">
        <img src={user?.photoURL} alt="" className="h-16 w-16 rounded-full" />
        <Button variant="outline" size="sm">Change Photo</Button>
      </div>
      <div className="space-y-4">
        <div><Label>Full Name</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
        <div><Label>Subject</Label><Input value={user?.subject || ""} disabled className="bg-muted" /></div>
        <div><Label>Bio</Label><Textarea value={bio} onChange={e => setBio(e.target.value)} /></div>
        <div><Label>Phone Number</Label><Input value={phone} onChange={e => setPhone(e.target.value)} /></div>
        <div><Label>Email</Label><Input value={user?.email || ""} disabled className="bg-muted" /></div>
        <section className="bg-card rounded-2xl border border-border p-4 space-y-3">
          <h2 className="font-semibold text-foreground">Change Password</h2>
          <div><Label>Current Password</Label><Input type="password" /></div>
          <div><Label>New Password</Label><Input type="password" /></div>
          <div><Label>Confirm Password</Label><Input type="password" /></div>
        </section>
        <Button className="w-full" onClick={() => toast({ title: "Profile saved!" })}>Save Changes</Button>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
