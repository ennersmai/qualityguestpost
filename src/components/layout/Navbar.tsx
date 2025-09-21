'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/features/authSlice';
import Image from 'next/image';
import { ChevronDown, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const user = useAppSelector(selectUser);

  return (
    <header className="absolute top-0 z-40 w-full text-white">
      <div className="container mx-auto px-4 flex h-24 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/imageedit_5_9641232587-1_9d3a2815dec8351e959162088ee08122.png"
              alt="Quality Guest Post Logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          <Link href="/standard-guest-post" className="hover:text-gray-300">Standard Guest Post</Link>
          <Link href="/premium-shop" className="hover:text-gray-300">Premium Shop</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <button className="flex items-center hover:text-gray-300">
            Contact Us <ChevronDown className="ml-1 h-5 w-5" />
          </button>
          <Link href="/my-account" className="hover:text-gray-300">My Account</Link>
          <Link href="/cart" className="relative hover:text-gray-300">
            <ShoppingCart className="h-7 w-7" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;