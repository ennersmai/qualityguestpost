import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About QualityGuestPost</h3>
            <p className="text-blue-200">
              Quality Guest Post is committed to providing your business with expert blog outreach, quality content writing service and comprehensive support.
            </p>
            <Image
              src="/imageedit_5_9641232587-1_9d3a2815dec8351e959162088ee08122.png"
              alt="Quality Guest Post Logo"
              width={150}
              height={50}
              className="mt-4"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Important Links</h3>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Featured Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/services/standard" className="hover:text-white">Standard Guest Post</Link></li>
              <li><Link href="/services/premium" className="hover:text-white">Premium Guest Post</Link></li>
              <li><Link href="/services/qgp-primate" className="hover:text-white">QGP PRMate</Link></li>
              <li><Link href="/services/qgp-localboost" className="hover:text-white">QGP LocalBoost</Link></li>
              <li><Link href="/services/qgp-contentking" className="hover:text-white">QGP ContentKing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-blue-200">
              <p>148, Kingsland Rd London E2 8AA</p>
              <p>Phone: +44 742 644 9886</p>
              <p>Email: info@qualityguestpost.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-200 text-center md:text-left">Copyright © 2014-2022 QualityGuestPost.com. All Rights Reserved. <Link href="/refund-policy" className="hover:text-white underline">Refund Policy</Link></p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-blue-200 hover:text-white"><Facebook /></Link>
            <Link href="#" className="text-blue-200 hover:text-white"><Twitter /></Link>
            <Link href="#" className="text-blue-200 hover:text-white"><Linkedin /></Link>
            <Link href="#" className="text-blue-200 hover:text-white"><Instagram /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;