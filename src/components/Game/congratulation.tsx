"use client";
// import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "../footer";

export default function Congratulations() {
  return (
    <div className="flex flex-col items-center pt-12 min-h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative pb-10">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col">
        <h3 className="bg-spinner-gradient text-center bg-clip-text text-transparent font-normal text-3xl font-krona">
          Congratulations
        </h3>

        <section>
          <div className="mt-[46px] relative flex flex-col items-center justify-center">
            <Image src="/light.svg" width={336} height={347} alt="light" />
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

          <div className="flex flex-col items-center mt-[50px] justify-center gap-11">
            <div className="flex flex-col gap-4 justify-center">
              <p className="font-normal text-center text-4xl font-nunito text-white">
                You won
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative">
                <p className="w-[287px] text-center font-normal text-xl text-white font-nunito">
                  All the mushrooms matched your bet! You&apos;ve won 1000SBT!
                </p>
                <p className="w-[287px] text-center font-normal font-nunito text-xs text-white">
                  Amazing luck! Keep going to win even more!
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
      </section>

      <Footer />
    </div>
  );
}
