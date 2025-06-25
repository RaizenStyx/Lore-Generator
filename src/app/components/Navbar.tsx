"use client"
import { signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import Link from 'next/link'
import { Session } from 'next-auth'
import { UserCircleIcon, UserIcon, XMarkIcon, HomeIcon, 
  Bars3CenterLeftIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/solid'

export default function Navbar({ session }: { session: Session }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const isAuthorizedToViewForge = session?.user?.email === process.env.NEXT_PUBLIC_AUTHORIZED_FORGE_EMAIL;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (

   <header className="py-4 px-6 flex justify-around items-center bg-gray-900 shadow-lg border-b border-gray-700 z-40 relative">
    
    <Link href="/" className="text-3xl font-bold text-cyan-400 tracking-wide hover:text-fuchsia-500 transition-colors">
      Lore Forge
    </Link>

{/* Desktop Navigation (hidden on small screens) */}
      <nav className="hidden sm:contents items-center space-x-6">
        <ul className="flex space-x-6">
          {isAuthorizedToViewForge && (
            <li>
              <Link href="/" className="text-cyan-400 hover:text-fuchsia-500 transition-colors text-lg font-medium flex items-center gap-2">
                <HomeIcon className="h-5 w-5" /> Forge
              </Link>
            </li>
          )}
          <li>
            <Link href="/coming-soon" className="text-cyan-400 hover:text-fuchsia-500 transition-colors text-lg font-medium flex items-center gap-2">
                <ClockIcon className="h-5 w-5" /> Coming Soon
            </Link>
          </li>
          <li>
            <Link href="/test-forge" className="text-cyan-400 hover:text-fuchsia-500 transition-colors text-lg font-medium flex items-center gap-2">
                <SparklesIcon  className="h-5 w-5" /> Test Forge
            </Link>
          </li>
        </ul>

        {/* User Status and Auth Buttons (Desktop) */}
        <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-border-default"> {/* Separator */}
          {session ? (
            <>
              <p className="text-cyan-400 flex items-center gap-2 text-lg font-medium">
                <UserCircleIcon className="h-6 w-6 text-accent-main" />
                Welcome, <span>{session.user?.name || 'User'}</span>
              </p>
              <button
                onClick={() => signOut()}
                className="text-cyan-400 hover:bg-cyan-400 hover:text-fuchsia-500 px-4 py-2 rounded-lg font-bold hover:bg-accent-hover transition-colors duration-200 shadow-md flex items-center gap-2 text-base uppercase transform hover:scale-[1.05] active:scale-95 cursor-pointer"
              >
                <XMarkIcon className="h-5 w-5" /> Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="bg-gray-900 text-cyan-400 hover:bg-cyan-400 hover:text-fuchsia-500 px-4 py-2 rounded-lg font-bold hover:bg-accent-hover transition-colors duration-200 shadow-md flex items-center gap-2 text-base uppercase transform hover:scale-[1.05] active:scale-95 cursor-pointer"
            >
              <UserIcon className="h-5 w-5" /> Sign In
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Toggle (hidden on large screens) */}
      <div className="sm:hidden flex items-center space-x-4">
        {session ? (
          <p className="text-cyan-400 flex items-center gap-2 text-lg font-medium">
            <UserCircleIcon className="h-6 w-6 text-cyan-400" />
            <span className="text-cyan-400 text-sm">{session.user?.email?.split('@')[0] || 'User'}</span> {/* Shorter for mobile */}
          </p>
        ) : (
          <button
            onClick={() => signIn("github")}
            className=" text-cyan-400 px-3 py-1 rounded-lg text-sm font-bold hover:bg-accent-hover transition-colors duration-200 shadow-md flex items-center gap-1"
          >
            <UserIcon className="h-4 w-4" /> Sign In
          </button>
        )}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-cyan-400 hover:text-accent-main transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main"
          aria-label="Open mobile menu"
        >
          <Bars3CenterLeftIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Side Menu (Overlay) */}
      <div
        className={`fixed inset-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        {/* Overlay background */}
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={closeMobileMenu}></div>

        {/* Side Menu Content */}
        <div className="absolute top-0 right-0 w-64 h-full bg-bg-primary shadow-2xl flex flex-col p-6 space-y-6 border-l border-accent-main">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="self-end text-cyan-400 hover:text-accent-main transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-main"
            aria-label="Close mobile menu"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col space-y-4">
            {isAuthorizedToViewForge && (
              <li>
                <Link href="/" onClick={closeMobileMenu} className="text-cyan-400 hover:text-accent-main transition-colors text-xl font-medium flex items-center gap-3 py-2">
                  <HomeIcon className="h-6 w-6" /> Forge
                </Link>
              </li>
            )}
            <li>
              <Link href="/coming-soon" onClick={closeMobileMenu} className="text-cyan-400 hover:text-accent-main transition-colors text-xl font-medium flex items-center gap-3 py-2">
                <ClockIcon className="h-6 w-6" /> Coming Soon
              </Link>
            </li>
            <li>
              <Link href="/test-forge" className="text-cyan-400 hover:text-fuchsia-500 transition-colors text-lg font-medium flex items-center gap-2">
                <SparklesIcon  className="h-5 w-5" /> Test Forge
            </Link>
            </li>
          </ul>

          {/* Mobile Auth Status (if not already displayed by the trigger) */}
          {!session && (
            <div className="pt-6 border-t border-border-default">
              <button
                onClick={() => { signIn("github"); closeMobileMenu(); }}
                className="w-full bg-accent-main text-cyan-400 px-4 py-2 rounded-lg font-bold hover:bg-accent-hover transition-colors duration-200 shadow-md flex items-center justify-center gap-2 text-base uppercase"
              >
                <UserIcon className="h-5 w-5" /> Sign In
              </button>
            </div>
          )}
          {session && (
            <div className="pt-6 border-t border-border-default">
              <button
                onClick={() => { signOut(); closeMobileMenu(); }}
                className="w-full bg-accent-hover text-cyan-400 px-4 py-2 rounded-lg font-bold hover:bg-accent-main transition-colors duration-200 shadow-md flex items-center justify-center gap-2 text-base uppercase"
              >
                <XMarkIcon className="h-5 w-5" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
