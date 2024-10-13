"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    return (
        <>
            <div className="fixed bottom-0 z-[999] w-full pr-4 pb-5">
                <div className="flex flex-col items-end gap-1.5">
                    {isVisible && (
                        <button
                            type="button"
                            className="relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center"
                            onClick={scrollToTop}
                        >
                            <Image
                                src="/assets/icon/arrow-up.svg"
                                alt="message"
                                width={25}
                                height={25}
                                className="text-white"
                                priority
                            />
                        </button>
                    )}
                    <button
                        type="button"
                        className="relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center"
                    >
                        <Image
                            src="/assets/icon/message.svg"
                            alt="message"
                            width={25}
                            height={25}
                            className="text-white"
                            priority
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default FloatingButton
