import Header from "@/components/Header";
import MarqueeImage from "@/components/MarqueeImage";
import MarqueeSection from "@/components/MarqueeSection";
import TopTiles from "@/components/TopTiles";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MarqueeSection></MarqueeSection>
      <Header></Header>
      <TopTiles></TopTiles>
      {/* <MarqueeImage></MarqueeImage> */}
    </div>
  );
}
