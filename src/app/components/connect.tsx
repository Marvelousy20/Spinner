"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function ConnetWallet() {
  return (
    <div className="flex flex-col items-center pt-12 h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col">
        <div className="flex items-center justify-center pb-[53px]">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <h1 className="text-3xl text-center font-krona w-[330px]">
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            Connect
          </span>{" "}
          <br />
          <span className="bg-spinner-gradient bg-clip-text text-transparent">
            Your Wallet
          </span>
        </h1>

        <div className="mt-8 text-white">
          <h3 className="text-center">
            Secure your transactions to get started
          </h3>

          <div className="mt-10 space-y-2.5 z-10 ">
            <div className="flex items-center justify-between bg-[#221610] w-full">
              <h1 className=" px-2.5 py-3.5 rounded-[5px] w-[263px]">
                To play the Spinner Betting game, please connect your Haman
                Wallet. This will enable token payments and reward withdrawals.
              </h1>
              <div>
                {" "}
                <Image
                  src="/wallet.png"
                  width={32.66}
                  height={33}
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#221610] w-full">
              <h1 className=" px-2.5 py-3.5 w-[288px]">
                Your wallet information is safe and secure.
              </h1>
              <div>
                {" "}
                <Image src="/lock.svg" width={32.66} height={33} alt="" />{" "}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 ">
            <Button className="text-2xl !h-[54px] !rounded-[40px] font-krona font-normal  !py-3 !px-6">
              <Link href="/level">Connect Wallet</Link>
            </Button>
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
