 
"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  thumbnail: string;
  videoUrl: string;
  label: string;
  mobthumbnail :string;
}

export default function VideoPlayer({ thumbnail, videoUrl, label, mobthumbnail }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
const [muted, setMuted] = useState(true);
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden h-[320px] lg:h-full border-6 border-[#E6E6E6] shadow-[0px_16px_24px_0px_#114A9F24]" >
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          className="group relative w-full h-full"
          aria-label={label}
        >
          {/* thumbnail */}
          <Image
            src={thumbnail}
            alt={label}
            fill
            className="object-cover hidden sm:block"
          />

          <Image
            src={mobthumbnail}
            alt={label}
            fill
            className="object-cover sm:hidden"
          />
          

          {/* dark overlay */}
          {/* <div className="cursor-pointer absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,50,0.35)_0%,rgba(10,20,50,0.55)_100%)] group-hover:bg-[linear-gradient(180deg,rgba(10,20,50,0.45)_0%,rgba(10,20,50,0.65)_100%)] transition-colors duration-300" /> */}

          {/* play button + label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 8.75006C8.74982 8.13422 8.91213 7.52924 9.22055 6.99619C9.52896 6.46315 9.97257 6.02092 10.5066 5.71415C11.0406 5.40739 11.646 5.24695 12.2619 5.24904C12.8777 5.25113 13.4821 5.41568 14.014 5.72606L35.0087 17.9726C35.5386 18.28 35.9785 18.7211 36.2844 19.2518C36.5903 19.7825 36.7516 20.3842 36.7522 20.9968C36.7527 21.6094 36.5924 22.2114 36.2874 22.7426C35.9824 23.2738 35.5433 23.7157 35.014 24.0241L14.014 36.2741C13.4821 36.5844 12.8777 36.749 12.2619 36.7511C11.646 36.7532 11.0406 36.5927 10.5066 36.286C9.97257 35.9792 9.52896 35.537 9.22055 35.0039C8.91213 34.4709 8.74982 33.8659 8.75 33.2501V8.75006Z" fill="white"/>
                    </svg> 
            <span className="text-white text-18 font-[500] ">
              {label}
            </span>
          </div>
        </button>
      ) : (
//         <iframe
//     src={videoUrl}
//     className="w-full h-full"
//     allow="autoplay; encrypted-media"
//     allowFullScreen
//   />
   <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
          playsInline

        />
      )}
    </div>
  );
}