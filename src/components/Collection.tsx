"use client"

import Image from "next/image"
import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const Collections = () => {
    const categories = [
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/PA_1724902697374.jpg",
            title: "PREFACE ACADEMY"
        },
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/PCL_1724902579422.jpg",
            title: "PCL"
        },
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/SD_1724903528394.jpg",
            title: "Summerlove Delight"
        },
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/SH_1724902800774.jpg",
            title: "Speed Hunters"
        },
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/RT_1724903334353.jpg",
            title: "Rollin Tunes"
        },
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/GNS_1724903160190.jpg",
            title: "Genesis"
        },
        {
            href: "#",
            src: "https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/UNC_1724903619532.jpg",
            title: "Uncharted"
        }
    ]

    return (
        <div className="bg-[#F9F9F9] py-10">
            <div className="max-w-6xl mx-auto p-5">
                <h1 className="text-center text-2xl font-bold mb-8">Collections</h1>
                <div className="flex justify-center items-center gap-3">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        breakpoints={{
                            500: { slidesPerView: 5 },
                            768: { slidesPerView: 6 }, 
                            1024: { slidesPerView: 7 }
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="w-full"
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link href={category.href} className="group block relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                                    <Image
                                        src={category.src}
                                        alt={category.title}
                                        width={1000}
                                        height={1000}
                                        className="object-cover w-full h-48 transition-transform duration-200 transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h2 className="text-white text-xs lg:text-base text-center font-semibold">{category.title}</h2>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Collections
