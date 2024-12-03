'use client';

import React from 'react';
import Link from 'next/link';

import { FOOTER_DATA } from '../../../../constant';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-bold uppercase mb-4">{FOOTER_DATA.about.title}</h2>
          <p className="text-sm text-gray-400">{FOOTER_DATA.about.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold uppercase mb-4">{FOOTER_DATA.quickLinks.title}</h2>
          <ul className="space-y-2">
            {FOOTER_DATA.quickLinks.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <p className="text-sm text-gray-400 hover:text-gray-200 transition">
                    {link.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold uppercase mb-4">{FOOTER_DATA.contact.title}</h2>
          <ul className="space-y-3">
            {FOOTER_DATA.contact.details.map((detail, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-400"
              >
                <detail.icon size={16} />
                <span>{detail.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold uppercase mb-4">{FOOTER_DATA.socialMedia.title}</h2>
          <div className="flex space-x-4">
            {FOOTER_DATA.socialMedia.links.map((social, index) => (
              <Link href={social.href} key={index}>
                <p rel="noopener noreferrer">
                  <social.icon
                    size={20}
                    className="text-gray-400 hover:text-gray-500 transition"
                  />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-commerce Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
