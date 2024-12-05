"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface ChooseMushroomProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ChooseMushroom({ open, setOpen }: ChooseMushroomProps) {
  const [selectedMushroom, setSelectedMushroom] = useState("1");

  const mushrooms = [
    {
      name: "1",
      img: "/mush1.svg",
    },
    {
      name: "2",
      img: "/mush2.svg",
    },
    {
      name: "3",
      img: "/mush3.svg",
    },
    {
      name: "4",
      img: "/mush4.svg",
    },
    {
      name: "5",
      img: "/mush5.svg",
    },
  ];

  const handleSelectedMusroom = (mushroom: string) => {
    setSelectedMushroom(mushroom);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm border-none rounded-[3px] !bg-[#211814F0] bg-opacity-90 flex flex-col items-center px-12 py-12">
        <DialogTitle className="bg-spinner-gradient bg-clip-text text-transparent text-lg font-krona text-center">
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            Choose Your Lucky
          </span>{" "}
          <span className="bg-spinner-gradient bg-clip-text text-transparent">
            Mushroom!
          </span>
        </DialogTitle>

        <div className="!text-white text-lg flex">
          {mushrooms.map((mushroom) => (
            <div
              key={mushroom.name}
              className={`flex flex-col items-center ${
                selectedMushroom === mushroom.name
                  ? "bg-[#42403F] rounded-[3px]"
                  : ""
              }`}
              onClick={() => handleSelectedMusroom(mushroom.name)}
            >
              <Image
                src={mushroom.img}
                width={61}
                height={61}
                alt={mushroom.name}
                className={`cursor-pointer h-[61px] w-[61px]`}
              />
              <span
                className={`text-lg font-krona  ${
                  selectedMushroom === mushroom.name
                    ? "bg-welcome-gradient bg-clip-text text-transparent"
                    : "text-[#FF8000]"
                }`}
              >
                {mushroom.name}
              </span>
            </div>
          ))}
        </div>

        <DialogFooter className="flex flex-row justify-between gap-x-3">
          <Button
            className="text-sm !h-[27px] !rounded-[40px] font-normal !py-3 !px-6"
            onClick={() => setOpen(false)}
          >
            Place Bet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
