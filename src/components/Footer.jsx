import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";

const routes = [
  { name: "Start", path: "/" },
  { name: "Hobbys", path: "/about" },
  { name: "Sonstiges", path: "/imprint" },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and technologies */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <img
              src="/logo192.png"
              alt="Logo"
              style={{ height: 40, width: 40 }}
              className="rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              <p style={{ margin: 0, fontSize: 12, lineHeight: "normal" }}>
                Erstellt mit <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">React Router</span> und{" "}
                <span className="font-semibold">Tailwind CSS</span>
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex justify-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                to={route.path}
                className="text-sm font-medium text-white hover:text-gray-300 hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
              >
                {route.name}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex justify-end gap-5">
            <a
              href="https://github.com/julianertle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all duration-200 transform hover:scale-125"
              aria-label="GitHub Profile"
            >
              <BsGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/julez_vin?igsh=ZDAwbzZqbGJ5ZXh2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all duration-200 transform hover:scale-125"
              aria-label="Instagram Profile"
            >
              <BsInstagram size={28} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 text-center text-xs text-gray-400 border-t border-gray-700/50">
          © {new Date().getFullYear()} Julian Ertle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
