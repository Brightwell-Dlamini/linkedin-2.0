import React from 'react';
import Image from 'next/image';
import HeaderLink from '../components/HeaderLink';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import HomeIcon from '@mui/icons-material/Home';
// import GroupIcon from '@mui/icons-material/Group';
// import ChatIcon from '@mui/icons-material/Chat';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import NotificationsIcon from '@mui/icons-material/Notifications';
import Head from 'next/head';
function Home() {
  return (
    <div>
      <Head>
        <title>Feed | Linkedin</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="flex justify-between items-center px-8 py-3 max-w-[1128px] mx-auto">
        <div className="relative w-28 h-10 sm:w-36 ">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300 ">
          <div className="hidden sm:flex space-x-10 pr-4">
            {/* <HeaderLink Icon={HomeIcon} text="Home" />
            <HeaderLink Icon={GroupIcon} text="My Network" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
            <HeaderLink Icon={ChatIcon} text="Messaging" />
            <HeaderLink Icon={NotificationsIcon} text="Notifications" />
            <HeaderLink Icon={AccountCircleIcon} text /> */}
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          <div className="flex space-x-4">
            <button className="font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-200 px-2 rounded-md py-0 ml-1">
              Join now
            </button>
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1 transition-all hover:border-2 outline-none focus:outline-none">
              Sign in
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
