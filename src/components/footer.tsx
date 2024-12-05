"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: string;
  activeIcon: string;
}

export default function Footer() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      href: "/winner",
      label: "Leaderboard",
      icon: "/board.svg",
      activeIcon: "/board-active.svg",
    },
    {
      href: "/spin",
      label: "Game",
      icon: "/spin.svg",
      activeIcon: "/spin-active.svg",
    },
    {
      href: "/shop",
      label: "Shop",
      icon: "/shop.svg",
      activeIcon: "/shop-active.svg",
    },
    {
      href: "/profile",
      label: "Profile",
      icon: "/profile.svg",
      activeIcon: "/profile-active.svg",
    },
    {
      href: "/history",
      label: "History",
      icon: "/history.svg",
      activeIcon: "/history-active.svg",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 flex items-center text-center justify-between gap-6 py-5 px-10 bg-[#211814] cursor-pointer !w-full !z-20 rounded-t-3xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div key={item.href} className="relative flex-1">
            <Link href={item.href} className="flex flex-col gap-2 items-center">
              <Image
                src={isActive ? item.activeIcon : item.icon}
                width={32}
                height={32}
                alt=""
              />
              <p
                className={`font-normal text-xs ${
                  isActive
                    ? "bg-welcome-gradient bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {item.label}
              </p>
            </Link>
            {isActive && (
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[51px] h-[5px] bg-[#FF8000] rounded-t-full" />
            )}
          </div>
        );
      })}
    </footer>
  );
}
