"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Loss() {
  return (
    <div className="flex flex-col items-center pt-12 h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col h-screen overflow-y-scroll">
        <h3 className="bg-spinner-gradient text-center bg-clip-text text-transparent font-normal text-3xl font-krona">
          Try Again
        </h3>

        <section>
          <div className="mt-[46px] flex flex-col items-center justify-center relative">
            <Image src="/ops.svg" width={200} height={347} alt="light" />
            <Image
              src="/congratleftflower.svg"
              width={49}
              height={49}
              alt="flower"
              className="absolute left-0 top-10"
            />
            <Image
              src="/congratrightflower.svg"
              width={33}
              height={33}
              alt="flower"
              className="absolute right-0 top-5"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-[50px] gap-11">
            <div className="flex flex-col gap-4 justify-center">
              <p className="font-normal text-center text-4xl font-nunito text-white">
                You Loss
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative">
                <p className="w-[287px] text-center font-normal text-xl text-white font-nunito">
                  The Mushrooms Didn&apos;t Match This Time!
                </p>
                <p className="w-[287px] text-center font-normal font-nunito text-xs text-white">
                  Try Again—Your Luck&apos;s Just Around the Corner!
                </p>
                <Image
                  src="/wonleft.svg"
                  width={48}
                  height={48}
                  alt="flower"
                  className="absolute -left-5 top-0"
                />
                <Image
                  src="/wonright.svg"
                  width={40}
                  height={40}
                  alt="flower"
                  className="absolute right-0 -top-12"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center mt-[57px] ">
            <Button className="text-2xl !h-[54px] !w-[230px] !rounded-[40px] font-krona font-normal !py-3 ">
              Play Again
            </Button>
            <Button className="text-2xl !h-[54px] !bg-[#A2360E] !w-[230px] px-4 !rounded-[40px] font-krona font-normal !py-3">
              Back to Shop
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/algae.svg" width={217} height={148} alt="plant" />
          </div>
        </section>

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
