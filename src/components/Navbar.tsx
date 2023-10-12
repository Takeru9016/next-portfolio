import Image from "next/image";

import { images } from "@/assets";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center py-7">
      <Image src={images.logo} alt="Logo" className="w-40" />
      <ModeToggle />
    </div>
  );
}
