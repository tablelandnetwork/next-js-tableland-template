import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Tableland } from "@/components/Tableland";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-lightgreen opacity-100 shadow p-2 mb-8">
        <h1 className="text-2xl font-bold">
          <Image
            src="/logo.svg"
            alt="Tableland Logo"
            width={0}
            height={0}
            style={{width:'200px', height: "auto" }}
            priority
          />
        </h1>
        <div>
          <ConnectButton />
        </div>
      </nav>
      <main className="flex justify-center flex-wrap">
        <Tableland />
      </main>
    </>
  );
}
