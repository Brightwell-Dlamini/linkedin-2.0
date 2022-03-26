import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Article,
  BusinessCenter,
  PhotoSizeSelectActual,
  VideoCameraBack,
} from '@mui/icons-material';

function Input() {
  const { data: session } = useSession();
  return (
    <div className="bg-white dark:bg-[#1d2226] rounded-lg p-3 space-y-3 border border-gray-300 dark:border-none">
      <div className="flex items-center space-x-2">
        <Avatar
          src={session?.user?.image}
          className="!h-10 !w-10 cursor-pointer"
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-full border border-gray-400 w-full text-left px-3 py-2.5 opacity-80 hover:opacity-100 font-medium "
        >
          Start a post
        </motion.button>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 md:gap-4">
        <button className="inputButton group">
          <PhotoSizeSelectActual className="text-blue-400" />
          <h4 className="opacity-80 group-hover:opacity-100">Photo</h4>
        </button>
        <button className="inputButton group">
          <VideoCameraBack className="text-green-400" />
          <h4 className="opacity-80 group-hover:opacity-100">Video</h4>
        </button>
        <button className="inputButton group">
          <BusinessCenter className="text-blue-300" />
          <h4 className="opacity-80 group-hover:opacity-100">Job</h4>
        </button>
        <button className="inputButton group">
          <Article className="text-red-400" />
          <h4 className="opacity-80 group-hover:opacity-100 whitespace-nowrap">
            Write Article
          </h4>
        </button>
      </div>
    </div>
  );
}

export default Input;
