"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SpinLimitModal({ open, setOpen }: ConfirmModalProps) {
  // Set the target end time (24 hours from now)
  const [timeLeft, setTimeLeft] = useState(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);
    return endTime.getTime() - new Date().getTime();
  });

  // Function to calculate hours, minutes, seconds
  const calculateTimeLeft = () => {
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = calculateTimeLeft();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(interval); // Stop the countdown when it reaches zero
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm border-none rounded-[3px] !bg-[#211814F0] bg-opacity-80 flex flex-col items-center px-12 py-12">
          <Image src="/question.svg" alt="question" width={118} height={60} />
          <Image src="/OOPS.svg" alt="question" width={118} height={60} />

          <DialogTitle className="bg-spinner-gradient bg-clip-text text-transparent text-2xl font-krona mt-4">
            Out of Spins!
          </DialogTitle>

          <DialogDescription className="!text-white text-lg text-center font-krona">
            <span className="bg-welcome-gradient bg-clip-text text-transparent">
              You&apos;ve reached your daily limit of 10
            </span>{" "}
            <span className="bg-spinner-gradient bg-clip-text text-transparent">
              purchases. Please try again after 24 Hours
            </span>
            <div className="mt-5 text-sm">Time left to buy more spins</div>
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 text-center mt-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-[#723D07] rounded-[3px] p-1.5 shadow-customInset border border-white">
                  {String(hours).padStart(2, "0")}
                </span>
                <span className="text-[0.5rem] text-[#C5DED1] mt-3">HOURS</span>
              </div>
              <span className="text-2xl font-bold text-white">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-[#723D07] rounded-[3px] p-1.5 shadow-customInset border border-white">
                  {String(minutes).padStart(2, "0")}
                </span>
                <span className="text-[#C5DED1] text-[0.5rem] mt-3">
                  MINUTES
                </span>
              </div>
              <span className="text-2xl font-bold text-white">:</span>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-[#723D07] rounded-[3px] p-1.5 shadow-customInset border border-white">
                  {String(seconds).padStart(2, "0")}
                </span>
                <span className="text-[0.5rem] text-[#C5DED1] mt-3">
                  SECONDS
                </span>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
