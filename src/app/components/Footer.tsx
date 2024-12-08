import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, Facebook, Instagram, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Leave Image */}
      <div className="absolute top-[-50px] left-0">
        <Image
          src="/leave.png" // Replace with the correct path for your "leave" image
          alt="Decorative leave"
          width={200}
          height={200}
          className="opacity-40"
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-orange-500">Still</span> You Need Our Support?
            </h2>
            <p className="text-gray-400">
              Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-gray-800 text-gray-400 px-4 py-2 w-full md:w-auto"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-2">
              Subscribe Now
            </Button>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-orange-500 pt-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us.</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex gap-3 items-start">
              <Clock className="text-orange-500" />
              <div>
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-gray-400">Mon - Sat (8:00 - 6:00)</p>
                <p className="text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help?</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/reporting">Reporting</Link></li>
              <li><Link href="/documentation">Documentation</Link></li>
              <li><Link href="/support">Support Policy</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    src={`/home-pic-${index + 1}.png`} // Update with the correct paths
                    alt="Recent post image"
                    width={70}
                    height={70}
                    className="rounded"
                  />
                  <div>
                    <Link
                      href="#"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Is fastfood good for your body?
                    </Link>
                    <p className="text-sm text-gray-500">February 28, 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12">
          <div className="bg-gray-800 text-gray-400 text-center py-4 rounded-t-md">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </div>
          <div className="flex justify-center gap-4 mt-6">
            {[
              { name: "Facebook", icon: Facebook },
              { name: "Twitter", icon: Twitter },
              { name: "Instagram", icon: Instagram },
              { name: "Mail", icon: Mail },
            ].map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href={`#${name.toLowerCase()}`}
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <span className="sr-only">{name}</span>
                <Icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
