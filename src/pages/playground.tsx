import { CardSwipe } from "@/components/ui/card-swipe"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import FlipLink from "@/components/ui/text-effect-flipper"

const Icons = {
  be: (props: any) => (
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        rx="14"
        fill="#D9D9D9"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-accent"
      />
      <path
        fill-rule="evenodd"
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        clip-rule="evenodd"
        d="M51.9401 33.6773H67.9869V29.082H51.9401V33.6773ZM59.8499 42.9063C56.2703 42.9063 53.5517 45.124 53.2899 49.2217H66.1324C65.2619 44.3585 63.1015 42.9063 59.8499 42.9063ZM60.3514 61.9125C63.6566 61.9125 66.0819 59.8247 66.5771 58.0657H73.5282C71.5412 64.4273 67.4381 68 60.0707 68C50.6691 68 45.3927 61.3132 45.3927 52.4402C45.3927 31.5444 75.5435 30.7953 74.0296 54.3913H53.2899C53.4918 59.1829 55.4692 61.9125 60.3514 61.9125ZM29.0715 60.9932C32.8656 60.9932 35.5212 59.5337 35.5212 55.5956C35.5212 51.5109 33.1747 49.7391 29.2355 49.7391H19.7299V60.9932H29.0715ZM28.5701 43.5962C31.7271 43.5962 33.9064 42.1267 33.9064 38.713C33.9064 35.1169 31.3707 34.0068 27.9046 34.0068H19.7299V43.5962H28.5701ZM29.6834 27C37.1612 27 42.3587 29.4717 42.3587 37.1622C42.3587 40.97 40.8291 43.8078 36.9656 45.7198C41.9109 47.1889 44.251 51.0462 44.251 56.1146C44.251 64.1602 37.8708 68 30.2385 68H11V27H29.6834Z"
        fill="black"
      />
    </svg>
  ),
  linkedin: (props: any) => (
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        rx="14"
        fill="#D9D9D9"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-accent"
      />
      <path
        fill-rule="evenodd"
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        clip-rule="evenodd"
        d="M27.7128 69.5277V33.4109H15.7096V69.5276H27.7128V69.5277ZM21.7125 28.4816C25.8969 28.4816 28.5035 25.7059 28.5035 22.2401C28.4244 18.6973 25.8969 16 21.7909 16C17.6843 16.0001 15 18.6974 15 22.2402C15 25.706 17.6052 28.4817 21.6334 28.4817L21.7125 28.4816ZM34.3561 69.5277C34.3561 69.5277 34.5136 36.7996 34.3561 33.411H46.3612V38.6487H46.2815C47.86 36.184 50.7038 32.5629 57.179 32.5629C65.0788 32.5629 71 37.7249 71 48.8186V69.5278H58.9969V50.2063C58.9969 45.3514 57.2601 42.0385 52.915 42.0385C49.5995 42.0385 47.6236 44.2719 46.7559 46.4309C46.4384 47.1993 46.3612 48.2786 46.3612 49.3581V69.5277H34.3561Z"
        fill="black"
      />
    </svg>
  ),
  github: (props: any) => (
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-accent"
        rx="14"
      />
      <path
        fill-rule="evenodd"
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        clip-rule="evenodd"
        d="M43.2908 13C60.0205 13 73.5817 26.9033 73.5817 44.057C73.5817 57.7757 64.9124 69.4135 52.8839 73.524C51.3482 73.8299 50.803 72.86 50.803 72.0331C50.803 71.0093 50.8393 67.6653 50.8393 63.5094C50.8393 60.6136 49.87 58.7236 48.7826 57.7603C55.5283 56.9909 62.6164 54.3645 62.6164 42.4359C62.6164 39.0434 61.4411 36.2749 59.4964 34.1C59.8114 33.3155 60.8504 30.1566 59.1996 25.8795C59.1996 25.8795 56.6612 25.0473 50.8787 29.0639C48.4584 28.3763 45.8655 28.0303 43.2908 28.0182C40.7161 28.0303 38.1262 28.3763 35.709 29.0639C29.9205 25.0473 27.376 25.8795 27.376 25.8795C25.7312 30.1566 26.7702 33.3155 27.0822 34.1C25.1466 36.2749 23.9623 39.0434 23.9623 42.4359C23.9623 54.3342 31.0352 57.0009 37.7628 57.7855C36.8964 58.5609 36.1119 59.9289 35.8393 61.9371C34.1127 62.7308 29.7266 64.1043 27.0246 59.3577C27.0246 59.3577 25.4223 56.3736 22.3811 56.1556C22.3811 56.1556 19.4277 56.1163 22.1751 58.0428C22.1751 58.0428 24.1591 58.997 25.5374 62.5864C25.5374 62.5864 27.3155 68.1295 35.7424 66.2515C35.7575 68.8474 35.7848 71.294 35.7848 72.0331C35.7848 72.854 35.2274 73.8147 33.7159 73.5269C21.6783 69.4225 13 57.7787 13 44.057C13 26.9033 26.5642 13 43.2908 13Z"
      />
    </svg>
  ),
  dribble: (props: any) => (
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        rx="14"
        fill="#D9D9D9"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-accent"
      />
      <path
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        d="M52.1047 42.2865C62.3133 41.0074 72.4417 43.0545 73.4467 43.2779C73.3987 36.0176 70.799 29.3486 66.54 24.1198C65.8858 24.9995 60.75 31.604 49.4248 36.2416C50.399 38.2079 51.2859 40.2494 52.1047 42.2865Z"
        fill="black"
      />
      <path
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        d="M63.4924 20.7563C58.0853 15.9269 50.9711 13 43.1711 13C40.6988 13.0157 38.2901 13.32 35.9932 13.864C36.8385 14.9992 42.4052 22.6116 47.43 31.8546C58.3401 27.761 62.9498 21.5401 63.4924 20.7563Z"
        fill="black"
      />
      <path
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        d="M41.9796 33.7142C36.9075 24.663 31.4202 17.0506 30.6071 15.9311C22.0413 19.9932 15.6135 27.9249 13.6357 37.4563C15.0072 37.4721 27.6402 37.52 41.9796 33.7142Z"
        fill="black"
      />
      <path
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        d="M45.5558 43.4568C45.9517 43.3294 46.3475 43.2027 46.7591 43.0918C45.9989 41.3617 45.16 39.6152 44.2889 37.9166C29.1041 42.4726 14.3467 42.2822 13.0168 42.2665C12.7462 50.3406 15.7668 58.0017 20.8232 63.587C21.5196 62.3959 29.8643 48.5368 45.5558 43.4568Z"
        fill="black"
      />
      <path
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        d="M48.447 48.1811C31.7011 54.0355 25.6763 65.6828 25.1509 66.7673C33.0138 73.2115 45.5122 74.9817 54.9664 70.6862C54.5183 68.0686 52.8033 58.9766 48.6324 48.1195C48.5708 48.1503 48.4935 48.166 48.447 48.1811Z"
        fill="black"
      />
      <path
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        d="M54.5137 46.6829C58.4083 57.4319 59.9909 66.1739 60.3166 67.9941C66.9885 63.4517 71.7513 56.2809 73.0855 47.9584C72.0612 47.6313 63.854 45.1891 54.5137 46.6829Z"
        fill="black"
      />
    </svg>
  ),
}

export default function Playground() {
  return (
    <section className="h-4xl mx-auto my-12 w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm dark:border-white/5 md:rounded-t-[44px]">
      <div className="relative mx-auto  w-full    rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm  dark:border-white/5  md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
        <article className=" z-50   mt-20 flex flex-col items-center justify-center ">
          <Badge
            variant="outline"
            className="mb-3 rounded-[14px] border border-black/10 bg-white text-base dark:border-white/5 dark:bg-neutral-800/5 md:left-6"
          >
            <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Hover Over Links
          </Badge>
        </article>
        <section className="h-full  ">
          <section className="grid place-content-center gap-2 px-8 py-24 text-black">
            <div className="group flex items-center justify-center ">
              <Icons.linkedin />
              <FlipLink href="https://x.com/guri_who">Linkedin</FlipLink>
            </div>
            <div className="group flex items-center justify-center">
              <FlipLink href="https://x.com/guri_who">Behance</FlipLink>
              <Icons.be />
            </div>
            <div className="group flex items-center justify-center">
              <Icons.github fill="red" />
              <FlipLink href="https://x.com/guri_who">Github</FlipLink>
            </div>
            <div className="group flex items-center justify-center">
              <FlipLink href="https://x.com/guri_who">Dribble</FlipLink>
              <Icons.dribble />
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}
