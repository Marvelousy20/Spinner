"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PlayModal from "./Game/PlayModal";
import Footer from "./footer";
// import OutofSpin from "./Game/OutofSpin";

export default function Spin() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center pt-12 min-h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-6 justify-center font-normal text-[0.63rem] text-white">
            <h3>Time to buy more spins</h3>
            <h3>23h : 46min : 12s</h3>
          </div>
          <h1 className="font-normal text-2xl font-krona text-center bg-spinner-gradient bg-clip-text text-transparent">
            Spin to Win!
          </h1>

          <div className="flex px-8 relative">
            <div className="mt-4">
              <Image
                src="/spinflower.svg"
                width={32}
                height={32}
                alt="flower"
                className="absolute left-0"
              />
            </div>
            <div className="bg-[#221610] flex items-center justify-center gap-6 w-full px-2.5 py-3.5 rounded-[3px]">
              <div className="flex flex-col gap-3">
                <h4 className="font-krona font-normal text-[0.69rem] bg-spinner-gradient bg-clip-text text-transparent">
                  User Nalance
                </h4>
                <p className="font-normal text-[0.69rem] font-krona text-white">
                  {" "}
                  $5000
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-krona font-normal text-[0.69rem] bg-spinner-gradient bg-clip-text text-transparent">
                  Spins Left
                </h4>
                <p className="font-normal text-[0.69rem] font-krona text-white">
                  {" "}
                  $10
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-krona font-normal text-[0.69rem] bg-spinner-gradient bg-clip-text text-transparent">
                  Rewards
                </h4>
                <p className="font-normal text-[0.69rem] font-krona text-white">
                  {" "}
                  3 NFTs
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="relative">
            <Image
              src="/roundedgradient.svg"
              width={441}
              height={441}
              alt="rounded-gradient"
            />
            <div className="w-[311px] mx-auto">
              <Image
                src="/box.svg"
                width={311}
                height={182}
                alt="rounded-gradient"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[311px] h-[182px]"
              />
            </div>
            <Image
              src="/leftboxflower.svg"
              width={46}
              height={32}
              alt="flower"
              className="absolute left-5 bottom-[60%]"
            />
            <Image
              src="/rightboxflower.svg"
              width={46}
              height={32}
              alt="flower"
              className="absolute right-20 top-[10%]"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-11">
            <div className="flex justify-center relative">
              <Button
                className="text-2xl !h-[54px] !rounded-[40px] font-krona font-normal !py-3 !px-6"
                onClick={() => setOpen(true)}
              >
                Play & Spin
              </Button>
              <Image
                src="/leftbtnflower.svg"
                width={46}
                height={32}
                alt="flower"
                className="absolute -left-16 top-4"
              />
              <Image
                src="/rightbtnflower.svg"
                width={46}
                height={32}
                alt="flower"
                className="absolute -right-10 -top-10"
              />
            </div>

            <h1 className="text-base font-normal text-center font-krona w-[229px]">
              <span className="bg-welcome-gradient bg-clip-text text-transparent">
                You are betting 1000
              </span>{" "}
              <br />
              <span className="bg-spinner-gradient bg-clip-text text-transparent">
                SBT for Mushroom 1.
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/plant.svg" width={217} height={148} alt="plant" />
          </div>
        </section>

        <Footer />
      </section>

      <PlayModal open={isOpen} setOpen={setOpen} />
      {/* <OutofSpin open={isOpen} setOpen={setOpen} /> */}
    </div>
  );
}
