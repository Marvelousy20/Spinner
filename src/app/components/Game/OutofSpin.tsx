"use client";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SpinLimitModal from "./SpinLimitModal";

interface ConfirmModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function OutofSpin({ open, setOpen }: ConfirmModalProps) {
  const [isLimitOpen, setIsLimitOpen] = useState(false);

  const handleLimit = () => {
    setIsLimitOpen(true);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm border-none rounded-[3px] !bg-[#211814F0] bg-opacity-90 flex flex-col items-center px-12 py-12">
          <DialogTitle className="bg-spinner-gradient bg-clip-text text-transparent text-2xl font-krona">
            Out of Spins!
          </DialogTitle>

          <DialogDescription className="!text-white text-lg">
            Wanna buy more spins to continue playing?
          </DialogDescription>

          <DialogFooter className="flex flex-row justify-between gap-x-3">
            <Button
              className="text-sm !h-[27px] !rounded-[40px] font-normal !py-3 !px-6"
              onClick={handleLimit}
            >
              Buy More Spins
            </Button>
            <Button
              className="text-sm !h-[27px] !rounded-[40px] font-normal !py-3 !px-6 !bg-[#A2360E]"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <SpinLimitModal open={isLimitOpen} setOpen={setIsLimitOpen} />
    </>
  );
}
