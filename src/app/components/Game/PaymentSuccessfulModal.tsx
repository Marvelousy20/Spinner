"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface SuccessfulProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SuccessModal({ open, setOpen }: SuccessfulProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent className="font-krona text-center text-lg max-w-sm border-none rounded-[3px] !bg-[#211814F0] bg-opacity-90 flex flex-col items-center px-12 py-12">
        <span className="text-center bg-welcome-gradient bg-clip-text text-transparent">
          Payment Successful!
        </span>
        <span className="bg-spinner-gradient bg-clip-text text-transparent -mt-4">
          You&apos;ve got 10 spins. Good luck!
        </span>
      </DialogContent>
    </Dialog>
  );
}
