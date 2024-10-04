"use client"

import Image from "next/image"
import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"
import { cn } from "@/lib/utils"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      src: "https://d2kchovjbwl1tk.cloudfront.net/vendors/10019/assets/image/1727925007956-DYS1.jpg",
      message: "PREFACE CHAPTER 11: SOON",
      button: {
        status: false,
        text: "Learn More",
        link: "#",
      }
    },
    {
      src: "https://d2kchovjbwl1tk.cloudfront.net/vendors/10019/assets/image/1727925070162-DYS2.jpg",
      message: "PREFACE CHAPTER 12: COMING SOON",
      button: {
        status: true,
        text: "Discover More",
        link: "#",
      }
    },
    {
      src: "https://d2kchovjbwl1tk.cloudfront.net/vendors/10019/assets/image/1727925116879-DYS3.jpg",
      message: "PREFACE CHAPTER 13: STAY TUNED",
      button: {
        status: true,
        text: "Get Started",
        link: "#",
      }
    },
  ]

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.src}
                alt={`slider image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              {/* Custom Message */}
              <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col text-white items-center justify-center text-center p-4 bg-black bg-opacity-50">
                <div className={cn("text-h3-medium px-2", slide.button.status == true ? "mb-4" : "")}>{slide.message}</div>
                {slide.button.status == true && (
                  slide.button.text && (
                    <Link
                      href={slide.button.link}
                      className="mt-2 inline-block px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {slide.button.text}
                    </Link>
                  )
                )}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button className="swiper-button-prev bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition duration-300 focus:outline-none z-40">
          <Image
            src="/assets/icon/cheveron-left.svg"
            alt="previous"
            width={30}
            height={30}
            priority
          />
        </button>
        <button className="swiper-button-next bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition duration-300 focus:outline-none z-40">
          <Image
            src="/assets/icon/cheveron-right.svg"
            alt="next"
            width={30}
            height={30}
            priority
          />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-white/30 transition-all duration-300 ${
              currentIndex === index
                ? "bg-opacity-100 scale-125"
                : "bg-opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default Slider
