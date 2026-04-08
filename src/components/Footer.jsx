import React from "react";
import { Link } from "react-router-dom";
import { LinkedInIcon, GitHubIcon } from "../assets/SvgIcons";

const routes = [
  { name: "Start", path: "/" },
  { name: "Hobbys", path: "/about" },
  { name: "Sonstiges", path: "/imprint" },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* 1. Copyright - First on both Mobile and Desktop */}
          <div className="text-center md:text-left text-xs text-gray-400">
            © {new Date().getFullYear()} Julian Ertle. All rights reserved.
          </div>

          {/* 2. Navigation links - Centered */}
          <nav className="flex justify-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                to={route.path}
                className="text-sm font-medium text-white hover:text-gray-300 hover:underline underline-offset-4 transition-all duration-200"
              >
                {route.name}
              </Link>
            ))}
          </nav>

          {/* 3. Social icons - Right aligned on desktop */}
          <div className="flex justify-center md:justify-end gap-5">
            <a
              href="https://www.linkedin.com/in/julian-ertle-900177274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-8 h-8 fill-current" />
            </a>
            <a
              href="https://github.com/julianertle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-8 h-8 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
