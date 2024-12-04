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
import ConfirmModal from "./ConfirmModal";

interface PlayModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function PlayModal({ open, setOpen }: PlayModalProps) {
  const [selectedBet, setSelectedBet] = useState<string | number>("");
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const predefinedBets = [1000, 1200, 1500];

  const handleBetClick = (amount: number) => {
    setSelectedBet(amount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBet(e.target.value);
  };

  const openConfirmModal = () => {
    setIsConfirmModalVisible(true);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm border-none rounded-[3px] !bg-[#211814F0] bg-opacity-90 flex flex-col items-center px-12 py-12">
          <DialogTitle className="bg-spinner-gradient bg-clip-text text-transparent text-2xl font-krona">
            Place Your Bet
          </DialogTitle>

          <DialogDescription className="!text-white text-lg">
            How much would you like to bet for this round?
          </DialogDescription>

          <div className="grid grid-cols-3 gap-2 text-sm">
            {predefinedBets.map((bet, index) => (
              <button
                key={index}
                className={`px-2 py-2 rounded-md text-white ${
                  selectedBet == bet ? "bg-orange-500" : "bg-button-gradient"
                }`}
                onClick={() => handleBetClick(bet)}
              >
                {bet} SPT
              </button>
            ))}
          </div>

          <input
            className="bg-[#443A36] rounded-[3px] py-4 w-full text-white text-center placeholder:text-white"
            placeholder="Enter Custom Amount"
            type="number"
            value={selectedBet}
            onChange={handleInputChange}
            required
          />

          <DialogFooter className="flex flex-row justify-between gap-x-3">
            <Button
              className="text-sm !h-[27px] !rounded-[40px] font-normal !py-3 !px-6"
              onClick={openConfirmModal}
            >
              Confirm Bet
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

      <ConfirmModal
        open={isConfirmModalVisible}
        setOpen={setIsConfirmModalVisible}
        bet={selectedBet}
      />
    </>
  );
}
