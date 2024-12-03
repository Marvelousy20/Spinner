import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center pt-28">
      <div>
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
      <h1 className="text-3xl text-center font-krona">
        <span className="bg-welcome-gradient bg-clip-text text-transparent">
          Welcome to
        </span>{" "}
        <br />
        <span className="bg-spinner-gradient bg-clip-text text-transparent">
          Spinner Betting
        </span>
      </h1>

      <div className="mt-8 text-white">
        <h3>To continue, confirm the following:</h3>

        <div className="mt-10 space-y-2.5">
          <h1 className="bg-[#221610] px-2.5 py-3.5 rounded-[5px]">
            You are 18+ years old
          </h1>
          <h1 className="bg-[#221610] px-2.5 py-3.5">
            You agree to both win and lose funds
          </h1>
          <h1 className="bg-[#221610] px-2.5 py-3.5">You are 18+ years old</h1>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="text-2xl">I Agree</Button>
        </div>
      </div>
    </div>
  );
}
