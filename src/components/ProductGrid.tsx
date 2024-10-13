import Link from "next/link"
import Image from "next/image"

const ProductGrid = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2  gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <Link href="#" className="block group">
                  <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://d2kchovjbwl1tk.cloudfront.net/vendor/10019/product/OUTER_1724045933026.jpg"
                      alt={`product-${index}`}
                      layout="fill"
                      className="absolute inset-0 w-full h-full transition-transform duration-200 transform group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white md:text-xl lg:text-3xl font-bold">
                        Jackets
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductGrid
