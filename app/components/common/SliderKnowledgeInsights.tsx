// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";

// interface BlogCardProps {
//   image: string;
//   category: string;
//   date: string;
//   title: string;
//   href: string;
// }

// interface SliderKnowledgeInsightsProps {
//   blogData: BlogCardProps[];
// }

// function BlogCard({ image, category, date, title, href }: BlogCardProps) {
//   return (
//     <Link href={href} className="group flex flex-col p-3 md:p-0 lg:p-4 2xl:p-6 bg-bgF5F9FC md:bg-transparent hover:bg-bgF5F9FC transition-colors duration-200 rounded-2xl">
//       {/* Image */}
//       <div className="overflow-hidden rounded-[20px] aspect-[3.27/3] md:aspect-[4.38/3] lg:aspect-[8/7] 3xl:aspect-[4.25/3]">
//         <Image
//           src={image}
//           alt={title}
//           width={600}
//           height={450}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//         />
//       </div>

//       {/* Meta */}
//       <div className="flex items-center justify-between pt-4 pb-4 lg:pb-6">
//         <span className="text-paragraph text-14 uppercase">
//           {category}
//         </span>
//         <span className="text-paragraph text-14 font-light">
//           {date}
//         </span>
//       </div>

//       {/* Title */}
//       <h3 className="text-paragraph  text-24 !leading-[1.2] tracking-[-3%] font-medium">
//         {title}
//       </h3>
//     </Link>
//   );
// }

// export default function SliderKnowledgeInsights({ blogData }: SliderKnowledgeInsightsProps) {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slideCount, setSlideCount] = useState(0);

//   return (
//     <section className="bg-white pt-6 xl:pt-[42px]">
//       <div className="">
//         <Swiper
//             modules={[Autoplay]}
//             // autoplay={{
//             //   delay: 3000,
//             //   disableOnInteraction: false,
//             //   pauseOnMouseEnter: true,
//             // }}
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//             setSlideCount(swiper.snapGrid.length);
//           }}
//           onSlideChange={(swiper) => {
//             setActiveIndex(swiper.snapIndex);
//             setSlideCount(swiper.snapGrid.length);
//           }}
//           onBreakpoint={(swiper) => {
//             setSlideCount(swiper.snapGrid.length);
//           }}
//           slidesPerView={1.18}
//           spaceBetween={24}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 32 },
//             1600: { slidesPerView: 3, spaceBetween: 32 },
//           }}
//           className="!overflow-visible md:!overflow-hidden"
//     style={{ alignItems: "stretch", overflow: "visible" }}
//         >
//           {blogData.map((item, i) => (
//             <SwiperSlide key={i} style={{ height: "auto", display: "flex", width: "100%" }}>
//               <BlogCard {...item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom pagination */}

//          <div className="flex items-center gap-2 mt-4 lg:mt-[82px] lg:hidden">
//           {Array.from({ length: slideCount }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => swiperRef.current?.slideTo(i)}
//               className={`h-[3px] transition-all duration-300 cursor-pointer
//                 ${activeIndex === i
//                   ? "w-[35px] h-[3px] bg-primary"
//                   : "w-[8px] h-[3px] bg-[#F6F4F2] hover:bg-primary"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { InsightCardItem } from "../ItAmcDubai/data";

export default function InsightCard({ item }: { item: InsightCardItem }) {
  const {
    category,
    date,
    title,
    description,
    imageSrc,
    linkHref,
    isHighlighted,
  } = item;

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link
        href={linkHref}
        aria-label={title}
        className="relative block aspect-[720/375] w-full overflow-hidden"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Meta row */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-18 uppercase tracking-wide text-paragraph">
          {category} <span className="mx-1">|</span>
          <span className="text-[#8a8a8a]">{date}</span>
        </p>

        <Link
          href={linkHref}
          aria-label={`Read: ${title}`}
          className={`flex h-[32px] w-[32px] lg:h-[42px] lg:w-[42px] shrink-0 items-center justify-center rounded-[4.41px] border transition-colors duration-300
          
              
              "border-[#dbe4f3] bg-[#f4f7fc] group-hover:bg-primary text-[#1d4fb8] group-hover:border-[#0b3d91] group-hover:bg-[bg-[linear-gradient(135deg,_#1A2E6E_0%,_#1A3FA0_100%)]] group-hover:text-white"
            `}
        >
          <ArrowRight
            className="h-6 w-6 opacity-100 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:opacity-0"
            strokeWidth={1.5}
          />

          <ArrowUpRight
            className="absolute h-6 w-6 text-white opacity-0 scale-75 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
            strokeWidth={1.5}
          />
        </Link>
      </div>

      {/* Title */}
      <h3
        className={`mt-4 text-24-medium tracking-[-3%] leading-[1.5] transition-colors duration-300 group-hover:text-[#0b3d91] 
          text-paragraph hover:text-primary
        `}
      >
        <Link href={linkHref}>{title}</Link>
      </h3>

      {/* Description */}
      <p className="mt-4 text-18 leading-[1.444] text-[#A9A9A9]">
        {description}
      </p>
    </article>
  );
}
