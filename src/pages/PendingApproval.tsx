import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const PendingApproval = () => (
  <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
    <div className="max-w-md text-center bg-card rounded-2xl border border-border p-8 animate-fade-in">
      <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-foreground">Your Account is Under Review</h1>
      <p className="text-muted-foreground mt-3">Our admin team will approve your account within 24–48 hours. You'll receive an SMS and email once approved.</p>
      <Button variant="outline" className="mt-6" asChild><Link to="/">Go Back Home</Link></Button>
    </div>
  </div>
);

export default PendingApproval;
