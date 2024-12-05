import Image from "next/image";
import { Button } from "../ui/button";

export default function Tokens() {
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
    <div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-3 mt-[45px] mb-[100px]">
        {shop.map((item, idx) => (
          <div className="relative bg-[#211814] p-1" key={idx}>
            {/* Glowing Edges */}
            <div className="absolute inset-0">
              {/* Top-left glow */}
              <div className="absolute -top-[5px] -left-[5px] w-[20px] h-[20px] bg-gradient-to-br from-orange-500 to-transparent rounded-full blur-lg opacity-90"></div>
              {/* Bottom-right glow */}
              <div className="absolute -bottom-[5px] -right-[5px] w-[20px] h-[20px] bg-gradient-to-tr from-orange-500 to-transparent rounded-full blur-lg opacity-90"></div>
            </div>

            <div>
              <Image
                src="/avatar.svg"
                width={143}
                height={51}
                alt="plant"
                className="w-full"
              />
              <div className="flex flex-col p-2">
                <p className="text-center text-[.7rem] font-semibold font-nunito text-white">
                  {item.name}
                </p>
                <div className="text-[.65rem] text-white font-bold font-nunito flex w-full justify-between">
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
          </div>
        ))}
      </div>
    </div>
  );
}
