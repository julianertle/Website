import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import {
  GermanFlagIcon,
  UKFlagIcon,
  MoonIcon,
  SunIcon,
} from "../assets/SvgIcons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"; // Import global theme context

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  // Use global theme state instead of local useState
  const { isDark, setIsDark } = useTheme();

  const navigation = [
    { name: t("navStart"), href: "/" },
    { name: t("navHobbies"), href: "/about" },
    { name: t("navMisc"), href: "/imprint" },
  ];

  // Helper to handle manual toggle and persistence
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light"); // This triggers the "Manual Override"
    console.log("Dark mode is " + newTheme);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo and desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Logo" src="public/logo.png" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={classNames(
                      isCurrent
                        ? "bg-gray-900 text-white"
                        : "text-white hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium no-underline",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right side icons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-1">
            {/* HIDDEN BELL ICON */}
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <BellIcon aria-hidden="true" className="hidden h-6 w-6" />
            </button>

            {/* LANGUAGE TOGGLE */}
            <button
              onClick={toggleLang}
              className="flex items-center justify-center p-2 rounded-md hover:bg-gray-700 transition-colors group"
              title={
                lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"
              }
            >
              {/* The wrapper div provides the white border. 
      'border-white/80' gives it a slightly soft white, 
      while 'group-hover:border-white' makes it bright on hover.
  */}
              <div className="w-7 h-5 flex items-center justify-center border border-white/80 rounded-sm overflow-hidden shadow-sm transition-colors group-hover:border-white">
                {lang === "de" ? (
                  <GermanFlagIcon className="w-full h-full object-cover" />
                ) : (
                  <UKFlagIcon className="w-full h-full object-cover" />
                )}
              </div>
            </button>
            {/* DARK MODE TOGGLE (Fixed to use global state) */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center p-2 rounded-md hover:bg-gray-700 transition-colors"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <MoonIcon className="h-6 w-6 text-gray-400 hover:text-white" />
              ) : (
                <SunIcon className="h-6 w-6 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  isCurrent
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700",
                  "block rounded-md px-3 py-2 text-base font-medium no-underline",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default NavBar;
