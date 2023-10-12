import Image from "next/image";
import { Linkedin, Twitter, Github, Facebook } from "lucide-react";

import { images } from "@/assets";

export default function Profile() {
  return (
    <div className="w-[400px] h-[800px]">
      <div className="w-[400px] h-[700px] bg-white rounded-[20px]" />
      <Image
        className="absolute w-[208px] h-[208px] top-36 left-48 object-cover"
        alt="Profile picture"
        src={images.avatar}
      />
      <div className="absolute top-0 left-0 font-bold text-[#0b0909] text-[28.4px] tracking-[0] leading-[35.5px] whitespace-nowrap">
        Sahil Jadhav
      </div>
      <div className="absolute top-0 left-0 [font-family:'Raleway-Medium',Helvetica] font-medium text-[#0a090880] text-[16px] tracking-[0] leading-[40px] whitespace-nowrap">
        FullStack Developer
      </div>
      <div className="absolute top-[460px] left-[150px] flex justify-center items-center gap-3">
        <div className="bg-[#f2f5f9] flex justify-center items-center rounded w-16 h-16">
          <Facebook className="hover:text-blue-500" />
        </div>
        <div className="bg-[#f2f5f9] flex justify-center items-center rounded w-16 h-16">
          <Linkedin className="hover:text-blue-500" />
        </div>
        <div className="bg-[#f2f5f9] flex justify-center items-center rounded w-16 h-16">
          <Twitter className="hover:text-blue-500" />
        </div>
        <div className="bg-[#f2f5f9] flex justify-center items-center rounded w-16 h-16">
          <Github className="hover:text-gray-500" />
        </div>
      </div>
      <div className="absolute w-[350px] h-[350px] top-[550px] left-[121px] bg-[#f2f5f9] rounded-[20px]" />
    </div>
  );
}
