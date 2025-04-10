"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/config/categories';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className="bg-white shadow-sm">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-10">
                        <div className="flex items-center space-x-4 w-full justify-between">
                            <a href="tel:+994123456789" className="text-sm hover:text-gray-300">
                                +994 12 345 67 89
                            </a>
                            <a href="mailto:info@bakusbest.com" className="text-sm hover:text-gray-300">
                                info@bakusbest.az
                            </a>
                        </div>
                        {/* <div className="flex items-center space-x-4">
              <a href="#" className="text-sm hover:text-gray-300">
                English
              </a>
              <div className="h-4 w-px bg-gray-700" />
              <a href="#" className="text-sm hover:text-gray-300">
                AZN
              </a>
            </div> */}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Baku's Best"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-30 h-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`text-sm font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                }`}
                        >
                            Home
                        </Link>

                        {/* Categories Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                                className={`text-sm font-medium flex items-center space-x-1 ${Object.keys(categories).some(key => isActive(`/${key}`))
                                    ? 'text-blue-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                <span>Categories</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {isCategoriesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                                    >
                                        {Object.entries(categories).map(([key, category]) => (
                                            <Link
                                                key={key}
                                                href={`/${key}`}
                                                className={`block px-4 py-2 text-sm ${isActive(`/${key}`)
                                                    ? 'bg-blue-50 text-blue-600'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                                onClick={() => setIsCategoriesOpen(false)}
                                            >
                                                {category.title}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/blog"
                            className={`text-sm font-medium ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                }`}
                        >
                            Blog
                        </Link>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white border-t border-gray-200"
                >
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for places, categories, or articles..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Menu Header */}
                                <div className="flex items-center justify-end p-4">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Menu Content */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    <Link
                                        href="/"
                                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive('/')
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </Link>

                                    {/* Categories Dropdown */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                                            className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${Object.keys(categories).some(key => isActive(`/${key}`))
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span>Categories</span>
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        <AnimatePresence>
                                            {isCategoriesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="pl-4 space-y-1"
                                                >
                                                    {Object.entries(categories).map(([key, category]) => (
                                                        <Link
                                                            key={key}
                                                            href={`/${key}`}
                                                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(`/${key}`)
                                                                ? 'bg-blue-50 text-blue-600'
                                                                : 'text-gray-700 hover:bg-gray-50'
                                                                }`}
                                                            onClick={() => {
                                                                setIsMenuOpen(false);
                                                                setIsCategoriesOpen(false);
                                                            }}
                                                        >
                                                            {category.title}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Link
                                        href="/blog"
                                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive('/blog')
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
} 