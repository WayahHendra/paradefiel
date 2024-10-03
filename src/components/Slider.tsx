"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const Slider = () => {
  const images = [
    "https://d2kchovjbwl1tk.cloudfront.net/vendors/10019/assets/image/1727925007956-DYS1.jpg",
    "https://d2kchovjbwl1tk.cloudfront.net/vendors/10019/assets/image/1727925070162-DYS2.jpg",
    "https://d2kchovjbwl1tk.cloudfront.net/vendors/10019/assets/image/1727925116879-DYS3.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 2000) // 5 seconds per slide

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    }
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleAnimationEnd}
      >
        {images.map((image, index) => (
          <div className="min-w-full h-screen relative" key={index}>
            <Image
              src={image}
              alt={`slider image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-700 ease-in-out"
              priority
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
        <button
          onClick={handlePrevious}
          className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition duration-300 focus:outline-none"
        >
          <Image
            src="/assets/icon/cheveron-left.svg"
            alt="previous"
            width={30}
            height={30}
            priority
          />
        </button>
        <button
          onClick={handleNext}
          className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition duration-300 focus:outline-none"
        >
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
        {images.map((_, index) => (
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
