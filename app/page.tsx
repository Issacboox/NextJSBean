"use client";
import WhyComponent from "@/components/why";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* component แยก */}
      <div className="flex flex-row justify-evenly w-full p-10">
        <div className="flex items-left flex-col justify-center mt-[100px]">
          <p className="italic text-slate-500 ">Your Comfort is Our Business</p>
          <p className="text-[64px] font-[600]">Hello</p>
          <p className="text-[20px]">
            Welcome to our online haven, where convenience meets quality. We are
            here to transform <br /> your shopping experience—bringing the
            store directly to your doorstep. Explore, order,
            <br /> and indulge in the ease of shopping redefined.
          </p>
          <Link href="/store">
            <button className="mt-4 px-10 py-4 text-xl rounded-md bg-green-400 text-white cursor-pointer hover:bg-green-300">
              Buy now
            </button>
          </Link>
        </div>
        <WhyComponent />
      </div>


    </div>
  );
}
