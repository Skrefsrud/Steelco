'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
    href: string;
    label: string;
}

const NAVIGATION_LINKS: NavLink[] = [
    { href: '/', label: 'Hjem' },
    { href: '/products', label: 'Våre produkter' },
    { href: '/contact', label: 'Kontakt oss' }
];

const NavigationLinks = () => {
    const pathname = usePathname();
    const isActive = (href: string): boolean => (href === '/' ? pathname === href : pathname.startsWith(href));

    return (
        <nav className='flex items-center gap-2'>
            {NAVIGATION_LINKS.map((link) => {
                const active = isActive(link.href);

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={`hover:text-primary-foreground focus:ring-ring hover:bg-primary font-small inline-flex items-center rounded-[var(--radius)] px-5 py-3 text-sm transition-all duration-200 hover:shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none ${active ? 'text-primary-foreground bg-[#58565b] shadow-md' : 'bg-accent text-accents-foreground opacity-80'} `}>
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavigationLinks;
