"use client";

import Image from "next/image";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export default function Profile() {
  const user = [
    {
      name: "Total Rewards",
      amount: "500 Token",
    },
    {
      name: "Spins Played",
      amount: "120",
    },
    {
      name: "SPS Token Count",
      amount: "500",
    },
    {
      name: "MEM Token Count",
      amount: "1200",
    },
    {
      amount: "3",
      name: "Earned NFTs",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-12 min-h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col min-h-screen w-full px-14">
        <h1 className="font-normal text-2xl font-krona text-center bg-spinner-gradient bg-clip-text text-transparent">
          My Profile
        </h1>

        <div className="flex items-center justify-center gap-3 my-[31px]">
          <Image src="/user2.svg" width={60} height={60} alt="" />
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-2xl text-white font-nunito">
              Sabrina Aryan
            </h3>
            <p className="font-medium text-sm font-nunito text-white">
              {" "}
              Wallet Address bcxft...9xc
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {user?.map((item, idx) => (
            <div
              key={idx}
              className="font-normal text-[13px] font-krona text-white w-full flex items-center justify-between"
            >
              <p>{item.name}</p>
              <p>{item.amount}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 mt-6">
          <h1 className="font-medium text-xl font-krona bg-spinner-gradient bg-clip-text text-transparent">
            Privacy Settings
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="font-normal text-[13px] font-krona text-white">
                Make Profile Private
              </p>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-normal text-[13px] font-krona text-white">
                Show Wallet ID
              </p>
              <Switch />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 font-krona">
            <Button className="text-[.65rem] rounded-[3px] bg-button-gradient">
              Disconnect Wallet
            </Button>
            <Button className="text-[.65rem] rounded-[3px] bg-button-gradient">
              Reconnect Wallet
            </Button>
          </div>
        </div>

        <footer className="fixed bottom-0 left-0 flex items-center justify-between gap-6 py-5 px-10 bg-[#211814] cursor-pointer !w-full !z-20 rounded-t-3xl">
          <div className="flex flex-col gap-2 items-center">
            <Image src="/board.svg" width={32} height={32} alt="" />
            <p className="font-normal text-xs text-[#BCBCBC]">Leaderboard</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src="/spin.svg" width={32} height={32} alt="" />
            <p className="font-normal text-xs text-[#BCBCBC]">Game</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src="/shop.svg" width={32} height={32} alt="" />
            <p className="font-normal text-xs text-[#BCBCBC]">Shop</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src="/profile.svg" width={32} height={32} alt="" />
            <p className="font-normal text-xs text-[#BCBCBC]">Profile</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src="/history.svg" width={32} height={32} alt="" />
            <p className="font-normal text-xs text-[#BCBCBC]">History</p>
          </div>
        </footer>
      </section>
    </div>
  );
}
