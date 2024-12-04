"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Level() {
  return (
    <div className="flex flex-col items-center pt-12 h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col h-screen overflow-y-scroll mb-16">
        <h1 className="text-3xl text-center font-krona w-[330px]">
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            Select Your
          </span>{" "}
          <br />
          <span className="bg-spinner-gradient bg-clip-text text-transparent">
            Game Mode
          </span>
        </h1>

        <div className=" bg-[#221610] flex flex-col gap-6 w-full px-2.5 py-3.5 mt-[37px] rounded-[3px]">
          <h1 className="font-normal text-2xl font-krona text-center bg-spinner-gradient bg-clip-text text-transparent">
            Easy Wins
          </h1>
          <div className="font-bold text-sm flex flex-col gap-3">
            <p className="text-white">
              {" "}
              <span className="text-[#FF8000]">Prizes:</span> Inexpensive tokens
              and NFTs.
            </p>

            <p className="text-white">
              <span className="text-[#FF8000]">Win Probability: </span> High.
            </p>

            <p className="text-white w-[267px]">
              <span className="text-[#FF8000]">Description: </span> Frequent
              wins with low-value rewards.
            </p>
            <div className="flex justify-center ">
              <Button className="text-2xl !h-[54px] !rounded-[40px] font-krona font-normal  !py-3 !px-6">
                Play
              </Button>
            </div>
          </div>
        </div>

        <div className=" bg-[#221610] flex flex-col gap-6 w-full px-2.5 py-3.5 mt-[37px] rounded-[3px]">
          <h1 className="font-normal text-2xl font-krona text-center bg-spinner-gradient bg-clip-text text-transparent">
            Medium Difficulty
          </h1>
          <div className="font-bold text-sm flex flex-col gap-3">
            <p className="text-white">
              {" "}
              <span className="text-[#FF8000]">Prizes:</span> More expensive
              tokens and NFTs.
            </p>

            <p className="text-white">
              <span className="text-[#FF8000]">Win Probability: </span> Medium.
            </p>

            <p className="text-white w-[267px]">
              <span className="text-[#FF8000]">Description: </span> Moderate
              chances of winning with higher-value prizes.
            </p>
            <div className="flex justify-center ">
              <Button className="text-2xl !h-[54px] !rounded-[40px] font-krona font-normal  !py-3 !px-6">
                Play
              </Button>
            </div>
          </div>
        </div>

        <div className=" bg-[#221610] flex flex-col gap-6 w-full px-2.5 py-3.5 mt-[37px] rounded-[3px]">
          <h1 className="font-normal text-2xl font-krona text-center bg-spinner-gradient bg-clip-text text-transparent">
            High Stakes
          </h1>
          <div className="font-bold text-sm flex flex-col gap-3">
            <p className="text-white">
              {" "}
              <span className="text-[#FF8000]">Prizes: </span> Big tokens and
              NFTs.
            </p>

            <p className="text-white">
              <span className="text-[#FF8000]">Win Probability:</span> Low.
            </p>

            <p className="text-white w-[267px]">
              <span className="text-[#FF8000]">Description:</span> Low odds but
              the highest-value prizes.
            </p>

            <p className="text-white w-[267px]">
              <span className="text-[#FF8000]">Payment: </span> Bets paid with
              MEM tokens.
            </p>
            <div className="flex justify-center ">
              <Button className="text-2xl !h-[54px] !rounded-[40px] font-krona font-normal  !py-3 !px-6">
                Play
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/footerimage.png"
        width={524.26}
        height={297}
        alt=""
        className=" absolute bottom-0"
      />
    </div>
  );
}
