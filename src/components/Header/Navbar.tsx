import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="w-100 bg-white shadow-xl">
          <div className="py-2.5 px-7 lg:px-16">
            <div className="flex justify-between items-center text-center text-black">
              <div className="flex items-center justify-center gap-4">
                <div className="lg:hidden">
                  <Link href="#">
                    <div className="hover:bg-gray-300 transition ease-in-out duration-300 transform w-9 h-9 flex items-center justify-center text-center rounded-xl">
                      <Image
                        src="/assets/icon/menu.svg"
                        alt="search"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>
                  </Link>
                </div>
                <div className="lg:hidden">
                  <p className="text-black text-opacity-20">|</p>
                </div>
                <div>
                  <Image
                    src="/assets/img/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
              </div>
              <div className="lg:hidden">
                <h3 className="text-gray-900 text-base">Paradefiel</h3>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="hidden lg:block">Dikirim ke : Indonesia | IDR (Rp) | ID</div>
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
                  <div className="hover:bg-gray-300 transition ease-in-out duration-300 transform w-9 h-9 flex items-center justify-center text-center rounded-xl">
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
      </nav>
    </>
  )
}

export default Navbar
