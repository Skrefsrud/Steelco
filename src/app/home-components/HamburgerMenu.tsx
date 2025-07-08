'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, easeInOut, easeOut, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLink {
    href: string;
    label: string;
}

const NAVIGATION_LINKS: NavLink[] = [
    { href: '/', label: 'Hjem' },
    { href: '/products', label: 'Våre produkter' },
    { href: '/contact', label: 'Kontakt oss' }
];

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string): boolean => (href === '/' ? pathname === href : pathname.startsWith(href));

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: easeOut,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: easeOut
            }
        }
    };

    const backdropVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: easeOut
            }
        }
    };

    return (
        <div className='lg:hidden'>
            {/* Hamburger Button */}
            <motion.button
                onClick={toggleMenu}
                className='relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900'
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                <motion.div animate={isOpen ? 'open' : 'closed'} className='h-6 w-6'>
                    <motion.div
                        variants={{
                            closed: { rotate: 0 },
                            open: { rotate: 180 }
                        }}
                        transition={{ duration: 0.3, ease: easeInOut }}>
                        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </motion.div>
                </motion.div>
            </motion.button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={backdropVariants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm'
                        onClick={toggleMenu}
                    />
                )}
            </AnimatePresence>

            {/* Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        className='absolute top-full right-0 left-0 z-40 mx-4 mt-2'>
                        <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl backdrop-blur-md'>
                            <div className='px-1 py-2'>
                                {NAVIGATION_LINKS.map((link, index) => {
                                    const active = isActive(link.href);

                                    return (
                                        <motion.div key={link.label} variants={itemVariants} custom={index}>
                                            <Link
                                                href={link.href}
                                                onClick={toggleMenu}
                                                className={`group relative mx-2 my-1 flex items-center rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                                                    active
                                                        ? 'text-bold bg-[#f3661a]/10 text-[#f3661a] shadow-sm'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                                }`}>
                                                {active && (
                                                    <motion.div
                                                        layoutId='activeIndicator'
                                                        className='absolute top-1/2 left-2 h-6 w-1 -translate-y-1/2 rounded-full bg-[#f3661a]'
                                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                <span className={active ? 'ml-4' : 'ml-2'}>{link.label}</span>
                                                <motion.div
                                                    className='ml-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100'
                                                    initial={false}
                                                    animate={{ x: active ? 0 : -10 }}>
                                                    <div className='h-1.5 w-1.5 rounded-full bg-current' />
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;
