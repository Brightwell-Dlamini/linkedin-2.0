import { Avatar } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Add, BookmarkOutlined } from '@mui/icons-material';

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      <div className="bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none  ">
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
          <div className="font-medium sidebarButton space-y-0.5 my-[12px]  w-full">
            <div className="flex justify-between space-x-2 hover:bg-gray-600">
              <h4 className="text-white/60 underline decoration-[#70b5f9] underline-offset-0 font-semibold cursor-pointer  hover:no-underline  w-full">
                Who viewed your profile
              </h4>
              <span className="text-blue-300">321</span>
            </div>
            <div className="hover:bg-gray-600 w-full">
              <div className="flex justify-between">
                <h4>Connections</h4> <span>163</span>
              </div>

              <p>Grow your network</p>
            </div>
          </div>
          <div className="sidebarButton space-y-2">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            <h4 className="dark:text-white font-medium items-center justify-center">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1"></span>{' '}
              Get Hired Faster, Try Premium Free
            </h4>
          </div>
          <div className="sidebarButton flex items-center space-x-1.5">
            <BookmarkOutlined className="!-ml-1" />
            <h4 className="dark:text-white font-medium">My items</h4>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden  md:flex flex-col items-center text-center border border-gray-300 dark:border-none hidden sticky top-20">
        <div className="text-blue-400 font-semibold flex flex-col items-start space-y-3 w-full p-2.5 text-xs">
          <div className="hover:underline cursor-pointer">
            <p>Groups</p>
          </div>
          <div className="hover:underline cursor-pointer flex  items-center w-full !justify-between">
            <p>Events</p>
            <Add className="hover:bg-gray-200 hover:bg-opacity-30 transition-all duration-150 rounded-full dark:text-white " />
          </div>
          <div className="hover:underline cursor-pointer ">
            <p>Followed Hashtags</p>
          </div>
        </div>
        <div className="sidebarButton hover:bg-gray-600  w-full p-2.5 text-sm">
          <h4 className="dark:text-white font-medium items-center justify-center">
            Discover More
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
