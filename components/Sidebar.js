import { Avatar } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      <div className="bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" alt="logo" layout="fill" priority />
        </div>
        <Avatar
          onClick={signOut}
          src={session?.user?.image}
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-y-0.5 ">
          <h4 className="hover:underline decoration-[#70b5f9] underline-offset-0 font-semibold cursor-pointer">
            {session?.user?.name}
          </h4>
          <p className="text-balck/60 dark:text-white/75 text-xs">
            {session?.user?.email}
          </p>
        </div>
        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2 hover:bg-gray-600">
              <h4 className="text-white/60 underline decoration-[#70b5f9] underline-offset-0 font-semibold cursor-pointer  hover:no-underline">
                Who viewed your profile
              </h4>
              <span className="text-blue-300">321</span>
            </div>
            <div className="hover:bg-gray-600">
              <div className="flex justify-between">
                <h4>Connections</h4> <span>163</span>
              </div>

              <p>Grow your network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
