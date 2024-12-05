"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShopNft from "../Shop/nfts";
import Tokens from "../Shop/tokens";
import Items from "../Shop/items";
import Footer from "../footer";

export default function Shop() {
  return (
    <div className="flex flex-col items-center pt-12 min-h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative px-12">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col min-h-screen">
        <h1 className="text-3xl text-center font-krona w-[330px]">
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            Shop
          </span>
          <br />
          <span className="bg-spinner-gradient bg-clip-text text-transparent">
            Rewards
          </span>
        </h1>

        <Tabs defaultValue="nfts" className="mt-10">
          <TabsList className="grid w-full grid-cols-3 gap-x-4 !bg-[#211814] font-krona">
            <TabsTrigger
              value="nfts"
              className="cursor-pointer h-[28px] flex justify-center bg-[#352924] items-center text-white rounded-md text-[.6rem] data-[state=active]:bg-nft-gradient"
            >
              NFTs
            </TabsTrigger>
            <TabsTrigger
              value="tokens"
              className="cursor-pointer h-[28px] flex justify-center bg-[#352924] items-center rounded-md text-[.6rem] text-white data-[state=active]:bg-nft-gradient"
            >
              Tokens
            </TabsTrigger>
            <TabsTrigger
              value="items"
              className="cursor-pointer h-[28px] flex justify-center bg-[#352924] items-center rounded-md text-[.6rem] text-white data-[state=active]:bg-nft-gradient"
            >
              Exclusive Items
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nfts">
            <ShopNft />
          </TabsContent>
          <TabsContent value="tokens">
            <Tokens />
          </TabsContent>
          <TabsContent value="items">
            <Items />
          </TabsContent>
        </Tabs>

        <Footer />
      </section>
    </div>
  );
}
