import { useState } from "react";
import { Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const EMAIL = "akshatt.jain9@gmail.com";

interface ContactDialogProps {
  trigger: React.ReactNode;
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(EMAIL);
    toast({
      title: "Copied!",
      description: "Email copied to clipboard.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card/95 border-primary/20 backdrop-blur-xl shadow-2xl shadow-black/40">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Reach out via email — the address below stays visible so you can copy it anytime.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-background/50 px-4 py-3 group/email">
          <span className="flex-1 select-all font-mono text-foreground" data-email>
            {EMAIL}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 opacity-0 transition-opacity group-hover/email:opacity-100 focus:opacity-100"
            onClick={copyToClipboard}
            aria-label="Copy email"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
