// About.js
import React from 'react';
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import HoverExpand from "@/components/ui/hover-expand"
const About = () => {
  const images = [
    { src: "https://images6.alphacoders.com/131/1311862.jpeg", alt: "Image 1" },
    { src: "https://4kwallpapers.com/images/wallpapers/elden-ring-pc-games-playstation-4-playstation-5-xbox-one-3840x2160-7712.jpg", alt: "Image 2" },
    { src: "https://images.wallpapersden.com/image/download/elden-ring-4k-gaming-2022_bWdna22UmZqaraWkpJRoZWVlrWZrbW0.jpg", alt: "Image 3" },
  ]
  return (
    <section className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col items-center justify-center  rounded-[24px] border border-black/5 bg-neutral-800/5  shadow-sm  md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
        <article className="relative z-50 mt-20 flex flex-col  items-center justify-center ">
          <Badge
            variant="outline"
            className="mb-3 rounded-[14px] border border-black/10 bg-white text-base md:left-6"
          >
            <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Component Preview
          </Badge>
          <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
            Hover the Images to Expand
          </h1>
        </article>
        <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          modalImageSize={400}
          maxThumbnails={11}
        />
      </div>
    </section>
  )

};

export default About;
