"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Shop() {
  const shop = [
    {
      name: "Golden Spinner",
      value: "500 Token",
    },
    {
      name: "Golden Spinner",
      value: "500 Token",
    },
    {
      name: "Golden Spinner",
      value: "500 Token",
    },
    {
      name: "Golden Spinner",
      value: "500 Token",
    },
    {
      name: "Golden Spinner",
      value: "500 Token",
    },
    {
      name: "Golden Spinner",
      value: "500 Token",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-12 h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col h-screen overflow-y-scroll">
        <h1 className="text-3xl text-center font-krona w-[330px]">
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            Shop
          </span>
          <br />
          <span className="bg-spinner-gradient bg-clip-text text-transparent">
            Rewards
          </span>
        </h1>

        <div className="flex items-center gap-5 justify-center mt-[40px] font-normal font-nunito text-xs text-white">
          <div className="w-[74px] cursor-pointer h-[28px] flex justify-center bg-nft-gradient items-center rounded-md">
            <p>NFT</p>
          </div>
          <div className="w-[74px] cursor-pointer h-[28px] flex justify-center bg-[#352924] items-center rounded-md">
            <p>TOKEN</p>
          </div>
          <div className="w-[123px] cursor-pointer h-[28px] flex justify-center bg-[#352924] items-center rounded-md">
            <p>Exclusive Items</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 mt-[45px] mb-[100px]">
          {shop.map((item, idx) => (
            <div className="w-[147px] border border-red-600">
              <Image
                src="/avatar.svg"
                width={143}
                height={51}
                alt="plant"
                className=""
              />
              <div className="flex flex-col  p-2">
                <p className="text-center text-[7.8px] font-semibold font-nunito text-white">
                  {item.name}
                </p>
                <div className="text-[7.8px] text-white font-bold font-nunito flex w-full justify-between">
                  <p>Price</p>
                  <p>{item.value}</p>
                </div>
                <div className="flex items-center mt-2 justify-center">
                  <Button className="text-[9px] !h-[17px]  font-nunito font-normal !py-3 !px-6">
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="flex items-center justify-center gap-6 py-5  bg-[#211814] cursor-pointer">
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
