'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Route } from 'next'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const pathName = usePathname()

    useEffect(() => {
        // vertical scroll position
        const currentVerticalScrollPos = window.scrollY
        // check initial scroll position
        if (currentVerticalScrollPos > 50) {
            setIsScrolled(true)
        }

        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks: NavLinkProps[] = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'About', id: 'about', path: '/about' },
        { name: 'Gallery', id: 'gallery', path: '/gallery' },
        { name: 'Journeys', id: 'journeys', path: '/journeys' },
        { name: 'Contact', id: 'contact', path: '/contact' }
    ]

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-stone-100'
                    : 'bg-transparent py-8'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Logo isScrolled={isScrolled} />

                <DesktopNavigation
                    navLinks={navLinks}
                    isScrolled={isScrolled}
                    pathName={pathName}
                />

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden p-2 text-stone-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X />
                    ) : (
                        <Menu className={isScrolled ? 'text-stone-900' : ''} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <MobileNavigation
                    navLinks={navLinks}
                    setIsMenuOpen={setIsMenuOpen}
                    pathName={pathName}
                />
            )}
        </nav>
    )
}

function DesktopNavigation({
    navLinks,
    isScrolled,
    pathName
}: {
    navLinks: NavLinkProps[]
    isScrolled: boolean
    pathName: string
}) {
    return (
        <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
                <Link
                    href={link.path as Route}
                    key={link.id}
                    className={`text-[12px] uppercase tracking-[0.4em] transition-all hover:border-b hover:border-current ${pathName === link.path ? 'font-bold border-b border-current' : 'font-light border-b-transparent'} ${isScrolled ? 'text-stone-900' : pathName === '/' ? 'text-white' : ''}`}
                >
                    {link.name}
                </Link>
            ))}
            {/* <a
				href="#"
				className={`px-8 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-300 font-bold ${
					isScrolled
						? 'bg-stone-900 text-white'
						: 'bg-white text-stone-900'
				} hover:scale-105 active:scale-95`}
			>
				Reserve
			</a> */}
        </div>
    )
}

function MobileNavigation({
    navLinks,
    setIsMenuOpen,
    pathName
}: {
    navLinks: NavLinkProps[]
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    pathName: string
}) {
    return (
        <div className="fixed inset-0 w-full h-screen bg-stone-50 flex flex-col items-center justify-center gap-10 z-[60] animate-in fade-in zoom-in-95 duration-300">
            <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-stone-900"
            >
                <X size={32} />
            </button>
            {navLinks.map((link) => (
                <Link
                    onClick={() => setIsMenuOpen(false)}
                    href={link.path as Route}
                    key={link.id}
                    className={`font-serif text-5xl transition-all ${pathName === link.path ? 'italic text-stone-900' : 'text-stone-300'}`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}
