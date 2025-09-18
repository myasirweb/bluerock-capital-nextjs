"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigationItems = [
    {
      name: "About",
      hasDropdown: true,
      items: [
        { label: "About Us", href: "/about-us" },
        { label: "Management", href: "/management" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      name: "Portfolio Management",
      hasDropdown: true,
      items: [
        { label: "Description", href: "/description" },
        { label: "Strategy", href: "/our-strategy" },
      ],
    },
    {
      name: "Investment funds",
      hasDropdown: true,
      items: [
        { label: "General Information", href: "/general-information" },
        {
          label: "Funds",
          href: "#",
          hasSubmenu: true,
          subItems: [
            { label: "NOAH F22 Multi Asset Fond", href: "/noah-f-22-multi-asset-fund" },
            { label: "LGT PB Conservative USD/EUR", href: "/lgt-pb-conservative" },
            { label: "LGT PB Balanced EUR/USD", href: "/lgt-pb-balanced" },
            { label: "LGT PB Growth EUR", href: "/lgt-pb-growth-eur" },
          ],
        },
      ],
    },
    {
      name: "Trading",
      hasDropdown: true,
      items: [
        { label: "Client Information", href: "/client-information" },
        { label: "Bucharest Stock Exchange", href: "/bucharest-stock" },
        { label: "Foreign Markets", href: "/foregin-market" },
      ],
    },
    {
      name: "Personalized Structured Services",
      hasDropdown: true,
      items: [
        {
          label: "Issuance Of Financial Instruments",
          href: "/listing-process-on-bucharest-stock-exchange",
        },
        { label: "Listing & Post-Listing", href: "/listing-postlisting" },
      ],
    },
    {
      name: "Contact",
      hasDropdown: false,
      href: "/contact",
    },
  ];

  return (
    <header className="bg-[#112143] border-b border-slate-700 w-full">
      <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/bluerock.png"
              alt="BlueRock"
              className="h-15 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-12">
          {navigationItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <button className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              )}

              {/* First-level dropdown */}
              {item.hasDropdown && item.items && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-slate-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.items.map((subItem) =>
                      subItem.hasSubmenu ? (
                        <div
                          key={subItem.label}
                          className="relative group/sub"
                        >
                          <Link
                            href={subItem.href}
                            className="flex justify-between items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-600"
                          >
                            {subItem.label}
                            <ChevronRight className="h-4 w-4" />
                          </Link>

                          {/* Submenu */}
                          <div className="absolute top-0 left-full ml-1 mt-0 w-48 bg-slate-700 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                            <div className="py-2">
                              {subItem.subItems.map((fund) => (
                                <Link
                                  key={fund.label}
                                  href={fund.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-600"
                                >
                                  {fund.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-600"
                        >
                          {subItem.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <a
            href="https://bluerock.arenaxt.ro/#/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-gradient-to-r from-[#0062a4] to-[#00a6e3] hover:from-[#00518d] hover:to-[#008dbf] cursor-pointer">
              Login
            </Button>
          </a>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="text-white bg-gradient-to-r from-[#0062a4] to-[#00a6e3] hover:from-[#00518d] hover:to-[#008dbf] cursor-pointer"
          >
            Open Account
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden ml-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white w-[95%] lg:w-[90%] rounded-lg shadow-lg overflow-hidden relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <iframe
              src="https://workw.com/bluerock/customer/onboarding"
              className="w-full h-[80vh]"
              title="Open Account"
            />
          </div>
        </div>
      )}
    </header>
  );
}
