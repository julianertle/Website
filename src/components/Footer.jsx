import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Imprint", path: "/imprint" },
];

function Footer() {
  return (
    <footer className="bg-gray-50 text-black mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo and technologies */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
  <img src="/logo192.png" alt="Logo" style={{ height: 40, width: 40 }} />
  <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
    <p style={{ margin: 0, fontSize: 12, lineHeight: 'normal' }}>
      Erstellt mit React, React Router und Tailwind CSS
    </p>
  </div>
</div>




        {/* Navigation links */}
        <div className="flex justify-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.name}
              to={route.path}
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-end space-x-6 pr-6">
          <a
            href="https://github.com/julianertle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/julez_vin?igsh=ZDAwbzZqbGJ5ZXh2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors duration-200"
          >
            <BsInstagram size={24} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-black py-6 border-t border-gray-200">
        © {new Date().getFullYear()} Julian Ertle. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;