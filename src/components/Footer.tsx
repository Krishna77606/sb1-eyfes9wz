import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Private Theater</h3>
            <p className="text-sm">
              Creating memorable entertainment experiences for your special occasions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Gallery</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Private Screenings</a></li>
              <li><a href="#" className="hover:text-white">Birthday Celebrations</a></li>
              <li><a href="#" className="hover:text-white">Corporate Events</a></li>
              <li><a href="#" className="hover:text-white">Special Occasions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>contact@privatetheater.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span>123 Theater Street, Bangalore</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Private Theater. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}