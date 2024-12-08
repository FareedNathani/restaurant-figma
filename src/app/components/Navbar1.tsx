import { Search, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function Navbar1() {
  return (
    <>
      <div className="text-center hidden sm:block">
        <Link href="/" className="text-4xl font-bold text-orange-500">
          Food<span className="text-white">tuck</span>
        </Link>
      </div>
      <nav className="left-0 right-0 z-50 bg-black/95 text-white px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-orange-500 lg:hidden">
  <span className="py-11">Food</span><span className="text-white py-11">tuck</span>
</Link>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8 flex-grow">
              <Link href="/" className="text-orange-500">Home</Link>
              <Link href="/menu" className="hover:text-orange-500 transition-colors">Menu</Link>
              <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
              <Link href="/pages" className="hover:text-orange-500 transition-colors">Pages</Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
              <Link href="/shop" className="hover:text-orange-500 transition-colors">Shop</Link>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            </div>

            {/* Search and Cart - Centered */}
            <div className="flex items-center justify-center space-x-4 flex-grow">
              <div className="hidden sm:flex items-center bg-transparent border border-gray-700 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none w-32 lg:w-64"
                />
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Link href="/cart" className="relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label htmlFor="menu-toggle" className="md:hidden text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 peer-checked:block hidden">
            <Link href="/" className="text-orange-500">Home</Link>
            <Link href="/menu" className="hover:text-orange-500 transition-colors">Menu</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <Link href="/pages" className="hover:text-orange-500 transition-colors">Pages</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link href="/shop" className="hover:text-orange-500 transition-colors">Shop</Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
