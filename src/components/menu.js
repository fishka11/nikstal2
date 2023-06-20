import React, { useState, useSyncExternalStore } from "react";
import Brand from "./brand";
import MenuItem from "./menuItem";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

// Checking window width by useSyncExternalStore hook.
export function useWindow() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}
function getSnapshot() {
  return { width: window.innerWidth };
}

export default function Menu({ routes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAriaExpand, setIsAriaExpand] = useState(false);

  const router = useRouter();
  const pathname = router.pathname;
  // if (pathname === "/") {
  //   pathname = "/o-nas";
  // }

  const toggle = () => {
    const { width } = getSnapshot();
    if (width < 768) {
      setIsOpen(!isOpen);
      setIsAriaExpand(!isAriaExpand);
    }
  };

  return (
    <nav className="w-screen border-gray-200 bg-blue-200/70 px-2 py-2.5 transition-all sm:px-4">
      <div className="container flex max-w-screen-xl flex-col flex-nowrap items-center md:flex-row">
        <div className="flex w-full flex-grow flex-row justify-between">
          <Brand />
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isAriaExpand}
            onClick={() => toggle()}
          >
            <span className="sr-only">Otwórz menu główne</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fillRule="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "max-md:hidden"
          } w-full transition-all md:w-auto`}
        >
          <ul className="mt-4 flex flex-col items-end md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {routes?.map((route) => {
              const isActive = pathname === route.slug;
              return (
                <MenuItem
                  key={uuidv4()}
                  slug={route.slug}
                  display={route.display}
                  toggle={toggle}
                  isActive={isActive}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
