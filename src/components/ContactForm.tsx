import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface ContactFormProps {
  onSubmitted?: () => void;
}

export default function ContactForm({ onSubmitted }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      toast({
        title: "Message sent",
        description: "Thanks! I'll get back to you shortly.",
      });
      onSubmitted?.();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="you@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can I help?" rows={5} required />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
