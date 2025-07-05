import React from "react";
import { isRouteErrorResponse, NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const navItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
          />
        </svg>
      ),
    },
    {
      path: "/analytics",
      label: "Analytics",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      path: "/settings",
      label: "Settings",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100%-4rem)] z-50 flex flex-col justify-between border-r shadow-md transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}
        bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800
      `}
      style={{ transitionProperty: "width" }}
    >
      {/* Navigation Items */}
      <nav className="flex flex-col p-2 pb-4 gap-2 items-center w-full">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            aria-label={item.label}
            className={({ isActive }) =>
              `group flex items-center w-full rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-gray-800 py-2
              ${isOpen ? "justify-start px-4" : "justify-center px-2"}
              ${
                isActive
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300"
              }
              `
            }
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {item.icon}
            </div>
            <span
              className={`ml-3 text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
      {/* Bottom User Info */}
      {isOpen ? (
        <div className="w-full px-4 pb-4 transition-all duration-500 ease-in-out">
          <div
            className={`flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm
        justify-start space-x-3 hover:shadow-md transition-all duration-300 ease-in-out
      `}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold flex items-center justify-center">
              A
            </div>
            <div className="transition-all duration-300 ease-in-out">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Admin User
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-4 pb-4 flex items-center justify-center transition-all duration-500 ease-in-out">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold flex items-center justify-center">
            A
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
