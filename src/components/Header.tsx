import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur shadow-xl">
        <div className="py-2.5 px-7 lg:px-16">
          <div className="grid grid-cols-3 text-center text-black">
            <div className="flex items-center justify-start gap-4">
              <div className="hover:bg-gray-300 transition ease-in-out duration-300 transform w-9 h-9 flex items-center justify-center text-center rounded-xl">
                <Image
                  src="/assets/icon/menu.svg"
                  alt="menu"
                  width={20}
                  height={20}
                  priority
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <div>
                  <p className="text-black/30">|</p>
                </div>
                <Link href="#">
                  <Image
                    src="/assets/img/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    priority
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/img/logo_name.png"
                alt="logo name"
                width={150}
                height={150}
                priority
              />
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center justify-center gap-1">
                <div className="hidden lg:block text-xs text-left mr-3">
                  <p className="text-[10px]">Dikirim ke : </p>
                  <p className="text-[14px] font-bold">Indonesia | IDR (Rp) | ID</p>
                </div>
                <Link href="#">
                  <div className="hover:bg-gray-300 transition ease-in-out duration-300 transform w-9 h-9 flex items-center justify-center text-center rounded-xl">
                    <Image
                      src="/assets/icon/search.svg"
                      alt="search"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </Link>
                <Link href="#">
                  <div className="hover:bg-gray-300 transition ease-in-out duration-300 transform w-9 h-9 flex items-center justify-center text-center rounded-xl relative">
                    <div className="absolute bottom-4 left-4 w-5 h-5 bg-red-500 rounded-full border-2 border-white/90">
                      <p className="text-white text-xs">9</p>
                    </div>
                    <Image
                      src="/assets/icon/cart.svg"
                      alt="cart"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </Link>
                <Link href="#">
                  <div className="hover:bg-gray-300 transition ease-in-out duration-300 transform w-9 h-9 flex items-center justify-center text-center rounded-xl">
                    <Image
                      src="/assets/icon/user.svg"
                      alt="user"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header