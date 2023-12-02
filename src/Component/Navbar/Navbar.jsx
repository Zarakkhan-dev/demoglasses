import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="border py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="ml-2 font-semibold text-[#252C32]">
                FrameShow
              </span>
            </div>
          
            <div className="ml-2 flex">
            <Link href="/">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <span className="text-sm font-medium">Frame</span>
              </div>
              </Link>
              <Link href="/displayglasses">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <span className="text-sm font-medium">Demo of Frame</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
