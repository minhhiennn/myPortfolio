"use client";

import ManOnTable from "@/assets/images/manOnTable.svg";
import Image from "next/image";

export default function GreetingImage() {
  return (
    <div className="hidden w-full h-auto lg:block">
      <Image alt="man sitting on table" src={ManOnTable} />
    </div>
  );
}
