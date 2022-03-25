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
import{getProviders,signIn} from 'next-auth/react'
function Home({providers}) {
  console.log(providers)
  return (
    <div className="space-y-10 relative overflow-x-clip">
      <Head>
        <title>Linkedin: Login or Sign up</title>
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
            {Object.values(providers).map((provider)=>(
            <div key={provider.id}>
              <div className="pl-4">
                 <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1 transition-all hover:border-2 outline-none focus:outline-none" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
              Sign in
            </button>
              </div>
            </div>
          ))}
           
          </div>
          
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center justify-between max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 font-light max-w-xl !leading-snug pl-4 xl:pl-0 ">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://rb.gy/vkzpzt"
            className="relative xl:absolute w-85 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5 rounded-full sm:-mr-20 sm:-mb-14"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
export async function getServerSideProps(context){
  const providers = await getProviders(context);
  return{props:{providers}}
}
