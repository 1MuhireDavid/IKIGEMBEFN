import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-black text-gray-400 mt-16">
      <div className="flex flex-wrap justify-between items-start gap-6 md:gap-12 p-6  text-gray-300">
        {/* Company Info */}
        <div className="w-full md:w-auto">
          <h1 className="text-2xl font-bold text-red-600">IKIGEMBE</h1>
          <p>
            Email us: <span className="text-white">customer@ikigembe.com</span>
          </p>
          <p className="mt-2">CUSTOMER SERVICES</p>
          <p className="text-white font-bold">+ (480) 555-0103</p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-auto">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/about" className="hover:text-red-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-red-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-red-400">
                Pricing Plan
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Movies To Watch */}
        <div className="w-full md:w-auto">
          <h3 className="text-white font-semibold">Movies To Watch</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/trending" className="hover:text-red-400">
                Top Trending
              </Link>
            </li>
            <li>
              <Link href="/recommended" className="hover:text-red-400">
                Recommended
              </Link>
            </li>
            <li>
              <Link href="/popular" className="hover:text-red-400">
                Popular
              </Link>
            </li>
          </ul>
        </div>

        {/* About Company */}
        <div className="w-full md:w-auto">
          <h3 className="text-white font-semibold">About Company</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/contact" className="hover:text-red-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-red-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-red-400">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="w-full md:w-auto flex flex-col gap-6">
  {/* Newsletter Subscription */}
  <div className="flex flex-col w-full">
    <h3 className="text-white font-semibold">Subscribe Newsletter</h3>
    <div className="flex mt-2">
      <input
        type="email"
        placeholder="Email*"
        className="p-2 bg-gray-700 text-white outline-none w-64 md:w-80"
      />
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2">
        Subscribe
      </button>
    </div>
  </div>

  {/* Social Media Links (Now Below Input) */}
  <div className="flex justify-center gap-4 mt-2">
    <FaFacebook className="text-2xl cursor-pointer hover:text-red-400" />
    <FaTwitter className="text-2xl cursor-pointer hover:text-red-400" />
    <FaGithub className="text-2xl cursor-pointer hover:text-red-400" />
    <FaInstagram className="text-2xl cursor-pointer hover:text-red-400" />
  </div>
</div>

      </div>

      {/* Bottom Info */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>
          &copy; 2025 <span className="text-red-600">IKIGEMBE</span>. All Rights
          Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/terms" className="hover:text-red-400">
            Terms Of Use
          </Link>
          <Link href="/privacy" className="hover:text-red-400">
            Privacy Policy
          </Link>
          <Link href="/faq" className="hover:text-red-400">
            FAQ
          </Link>
          <Link href="/watchlist" className="hover:text-red-400">
            Watch List
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
