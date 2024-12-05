"use client";

import Image from "next/image";

export default function TopWinner() {
  const winners = [
    {
      no: 3,
      image: "/user3.svg",
      name: "Iman",
      value: "1000",
      token: "token",
    },
    {
      no: 4,
      image: "/user2.svg",
      name: "Vatani",
      value: "800",
      token: "token",
    },
    {
      no: 5,
      image: "/user1.svg",
      name: "Jonathan",
      value: "700",
      token: "token",
    },
    {
      no: 6,
      image: "/user3.svg",
      name: "Vatani",
      value: "6500",
      token: "token",
    },
    {
      no: 7,
      image: "/user2.svg",
      name: "Jonathan",
      value: "600",
      token: "token",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-12 h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col h-screen overflow-y-scroll">
        <h1 className="text-3xl text-center font-krona w-[330px]">
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            Top
          </span>
          <br />
          <span className="bg-spinner-gradient bg-clip-text text-transparent">
            Spinners
          </span>
        </h1>

        <div className="flex items-center justify-center mt-[40px]">
          <Image src="/top.svg" width={294} height={210} alt="top" />
        </div>

        <div className="flex flex-col gap-4 mt-[33px]">
          {winners.map((item, idx) => (
            <div
              className="w-full flex items-center justify-between bg-[#352924] text-white font-normal font-nunito rounded-[11.83px] p-3"
              key={idx}
            >
              <div className="flex items-center gap-3">
                <p className="text-[19.22px]">{item.no}</p>
                <Image src={item.image} width={30} height={30} alt="plant" />
                <p className="text-[21.14px]">{item.name}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[23.06px]">{item.value}</h3>
                <p className="text-sm">{item.token}</p>
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
