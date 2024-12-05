"use client";

import Image from "next/image";

export default function Game() {
  return (
    <div className="flex flex-col items-center pt-12 h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col h-screen overflow-y-scroll">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-6 justify-center font-normal text-[0.63rem] text-white">
            <h3>Time to buy more spins</h3>
            <h3>23h : 46min : 12s</h3>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl text-center font-krona w-[330px]">
              <span className="bg-welcome-gradient bg-clip-text text-transparent">
                Spinning the
              </span>{" "}
              <br />
              <span className="bg-spinner-gradient bg-clip-text text-transparent">
                Mushrooms!
              </span>
            </h1>
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

            <Image
              src="/leftbtnflower.svg"
              width={46}
              height={32}
              alt="flower"
              className="absolute left-14 bottom-20"
            />
            <Image
              src="/rightbtnflower.svg"
              width={46}
              height={32}
              alt="flower"
              className="absolute right-28 top-[65%]"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-11">
            <div className="flex justify-center relative">
              <h1 className="w-[302px] text-center font-normal font-krona text-base">
                <span className="bg-welcome-gradient bg-clip-text text-transparent">
                  Hold tight! The mushrooms
                </span>{" "}
                <br />
                <span className="bg-spinner-gradient bg-clip-text text-transparent">
                  are spinning... Will your bet match?
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/plant.svg" width={217} height={148} alt="plant" />
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
