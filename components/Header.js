import {
  AppsOutlined,
  BusinessCenter,
  Chat,
  Group,
  HomeRounded,
  SearchRounded,
  CircleNotifications,
} from '@mui/icons-material';
import { getToken } from 'next-auth/jwt';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HeaderLink from './HeaderLink';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useSession, getSession } from 'next-auth/react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
function Header() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(true);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => () => setMounted(true), []);
  // console.log(session);
  return (
    <header className="sticky justify-around flex dark:bg-[#1d2226] px-8 py-1 focus-within:shadow-lg  top-0 z-20 left-0 right-0 shadow-md bg-white">
      {/* Left */}
      <div className="flex  items-center space-x-2  max-w-xs   ">
        {mounted && (
          <>
            {resolvedTheme === 'dark' ? (
              <Image src="https://rb.gy/bizvqj" width={45} height={45} />
            ) : (
              <img src="https://rb.gy/dpmd9s" className="w-10 h-10" />
            )}
          </>
        )}
        {/* width={55} height={55} */}
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-1 px-4 rounded w-full">
          <SearchRounded />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-8">
        <HeaderLink Icon={HomeRounded} text="Home" active feed />
        <HeaderLink Icon={Group} text="My Network" feed />
        <HeaderLink Icon={BusinessCenter} text="Jobs" feed hidden />
        <HeaderLink Icon={Chat} text="Messaging" feed />
        <HeaderLink Icon={CircleNotifications} text="Notification" feed />
        {/* {session ? (
          <img
            src={session?.user?.image}
            alt="profile"
            className="!h-[24px] !w-[24px] rounded-full"
          />
        ) : ( */}
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        {/* )} */}

        <HeaderLink Icon={AppsOutlined} text="Work" feed hidden />
        {mounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
              resolvedTheme === 'light' ? 'justify-end' : 'justify-start'
            }`}
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            <span className="absolute left-0 ">🌜</span>
            <motion.div
              className="w-5 h-5 bg-white rounded-full z-40"
              layout
              transition={spring}
            />
            <span className="absolute right-0.5 ">🌞</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
