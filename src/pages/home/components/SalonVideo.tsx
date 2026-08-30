import { useRef, useState } from "react";
import { useStore } from "@/store/Store";
import {
  VolumeX,
  Volume2,
  Play,
  Pause,
} from "lucide-react";

import bgVideo from "../../../assets/7575399-uhd_3840_2160_24fps.mp4";

export default function SalonVideo() {
  const theme = useStore((state) => state.theme);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Unable to play video:", error);
    }
  };

  const toggleMuted = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      className={`relative w-full overflow-hidden aspect-[4/3] md:aspect-[21/9] ${
        theme === "light"
          ? "bg-white"
          : "bg-[#111111]"
      }`}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(event) => {
          setIsMuted(event.currentTarget.muted);
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
        <h2
          className="text-[24px] font-semibold leading-[30px] tracking-tight text-white
                     md:text-[36px] md:leading-[39px]"
          style={{
            WebkitTextStroke: "0.5px rgba(255,255,255,0.8)",
          }}
        >
          Your Beauty, Your Moment
        </h2>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 z-20 flex w-full items-center justify-between px-4 md:px-6">
        
        {/* Play / Pause */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex h-10 w-10 cursor-pointer items-center justify-center
                     rounded-full bg-black/50 text-white backdrop-blur-sm
                     transition hover:bg-black/70 focus:outline-none
                     focus:ring-2 focus:ring-white/70"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>

        {/* Mute / Unmute */}
        <button
          type="button"
          onClick={toggleMuted}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="flex h-10 w-10 cursor-pointer items-center justify-center
                     rounded-full bg-black/50 text-white backdrop-blur-sm
                     transition hover:bg-black/70 focus:outline-none
                     focus:ring-2 focus:ring-white/70"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>

      </div>
    </section>
  );
}

