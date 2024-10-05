import Slider from "@/components/Slider"
import ProductGrid from "@/components/ProductGrid"
import Collections from "@/components/Collection"
import Footer from "@/components/Footer"

export default function Slideshow() {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <Slider />
          <ProductGrid />
          <Collections />
          <Footer />
        </div>
      </div>
    </div>
  )
}
