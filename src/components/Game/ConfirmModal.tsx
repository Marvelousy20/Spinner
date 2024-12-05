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
import SuccessModal from "./PaymentSuccessfulModal";

interface ConfirmModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  bet: string | number;
}

export default function ConfirmModal({
  open,
  setOpen,
  bet,
}: ConfirmModalProps) {
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleSuccessful = () => {
    setIsSuccessful(true);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm border-none rounded-[3px] !bg-[#211814F0] bg-opacity-90 flex flex-col items-center px-12 py-12">
          <DialogTitle className="bg-spinner-gradient bg-clip-text text-transparent text-2xl font-krona">
            Confirm Your Bet
          </DialogTitle>

          <DialogDescription className="!text-white text-lg">
            You are betting {bet} SPT for 10 spins. Are you sure you want to
            continue?
          </DialogDescription>

          <DialogFooter className="flex flex-row justify-between gap-x-3">
            <Button
              className="text-sm !h-[27px] !rounded-[40px] font-normal !py-3 !px-6"
              onClick={handleSuccessful}
            >
              Confirm
            </Button>
            <Button
              className="text-sm !h-[27px] !rounded-[40px] font-normal !py-3 !px-6"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <SuccessModal open={isSuccessful} setOpen={setIsSuccessful} />
    </>
  );
}
