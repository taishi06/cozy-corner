import React, { useState, useEffect } from 'react'
import {
    MessageCircle,
    ExternalLink,
    MapPin,
    Wind,
    Compass,
    Menu,
    X,
    ArrowRight,
    ChevronRight,
    Camera
} from 'lucide-react'

/**
 * PRODUCTION-READY NEXT.JS STRUCTURE (Single File Entry Point)
 * * In a real Next.js project, these components would be in /components
 * and /app (App Router) directories. This structure simulates that
 * hierarchy within a single cohesive file.
 */

// --- Shared UI Components ---

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Journeys', id: 'journeys' },
        { name: 'Contact', id: 'contact' }
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
                <button
                    onClick={() => setCurrentPage('home')}
                    className={`font-serif text-2xl tracking-tighter transition-colors ${
                        isScrolled
                            ? 'text-stone-900'
                            : 'text-stone-900 md:text-white'
                    }`}
                >
                    THE SANCTUARY.
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setCurrentPage(link.id)}
                            className={`text-[10px] uppercase tracking-[0.4em] transition-all hover:opacity-50 ${
                                currentPage === link.id
                                    ? 'font-bold border-b border-current'
                                    : 'font-light'
                            } ${isScrolled ? 'text-stone-900' : 'text-white'}`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="#"
                        className={`px-8 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-300 font-bold ${
                            isScrolled
                                ? 'bg-stone-900 text-white'
                                : 'bg-white text-stone-900'
                        } hover:scale-105 active:scale-95`}
                    >
                        Reserve
                    </a>
                </div>

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden p-2 text-stone-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X />
                    ) : (
                        <Menu
                            className={
                                isScrolled ? 'text-stone-900' : 'text-white'
                            }
                        />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 w-full h-screen bg-stone-50 flex flex-col items-center justify-center gap-10 z-[60] animate-in fade-in zoom-in-95 duration-300">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-8 right-8 text-stone-900"
                    >
                        <X size={32} />
                    </button>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => {
                                setCurrentPage(link.id)
                                setIsMenuOpen(false)
                            }}
                            className={`font-serif text-5xl transition-all ${currentPage === link.id ? 'italic text-stone-900' : 'text-stone-300'}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}

// --- Page Content Components ---

const HomePage = () => (
    <main className="animate-in fade-in duration-1000">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-stone-900/40 z-10" />
            <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
                className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
                alt="Estate Exterior"
            />
            <div className="relative z-20 text-center px-6">
                <span className="text-white uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-medium">
                    Private Estate • Modern Minimalist
                </span>
                <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-tight">
                    Stillness <br /> <span className="italic">Defined.</span>
                </h1>
                <button className="bg-white text-stone-900 px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-all shadow-xl active:scale-95">
                    Explore The Space
                </button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest opacity-60">
                    Scroll
                </span>
                <Wind size={20} />
            </div>
        </section>

        <section className="py-32 px-6 bg-stone-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-10 leading-[1.1]">
                        A sanctuary designed for slow living.
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-10">
                        Located on the edge of the Pacific, our unit is a
                        curated experiment in architecture and comfort. We've
                        stripped away the unnecessary to let the landscape speak
                        for itself. Experience a retreat where time feels
                        suspended.
                    </p>
                    <div className="flex gap-4 items-center text-stone-900 font-bold uppercase tracking-widest text-xs group cursor-pointer border-b border-stone-900 w-fit pb-2">
                        <span>View Architecture</span>
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-2 transition-transform"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 relative">
                    <div className="relative overflow-hidden aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                            alt="Kitchen Detail"
                        />
                    </div>
                    <div className="relative overflow-hidden aspect-square mt-16">
                        <img
                            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                            alt="Bedroom Detail"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
)

const AboutPage = () => (
    <section className="pt-40 animate-in slide-in-from-bottom-6 duration-1000 px-6">
        <div className="max-w-6xl mx-auto">
            <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                <h1 className="font-serif text-7xl md:text-9xl text-stone-900 leading-none">
                    Our Story.
                </h1>
                <p className="text-stone-500 uppercase tracking-widest text-xs font-bold md:mb-4">
                    Foundations & Philosophies
                </p>
            </header>

            <div className="grid md:grid-cols-12 gap-16 mb-40">
                <div className="md:col-span-7 relative group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200"
                        className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                        alt="The Sanctuary Interior"
                    />
                    <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none" />
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                    <h3 className="font-serif text-4xl mb-8 italic text-stone-800">
                        The Vision
                    </h3>
                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        Founded by a pair of designers in 2024, The Sanctuary
                        was built to prove that luxury doesn't have to be loud.
                        Every piece of furniture is hand-selected from local
                        artisans, and every window is positioned to catch the
                        golden hour.
                    </p>
                    <p className="text-stone-600 text-lg leading-loose opacity-80">
                        We believe that space influences state of mind. By using
                        raw materials like reclaimed cedar, concrete, and
                        unbleached linens, we invite our guests to ground
                        themselves.
                    </p>
                </div>
            </div>

            <section className="bg-stone-900 text-stone-50 p-16 md:p-32 mb-40">
                <div className="max-w-4xl">
                    <h2 className="font-serif text-5xl mb-16 leading-tight">
                        Amenities of Intention
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                        <div className="border-l border-stone-700 pl-8">
                            <h4 className="uppercase tracking-[0.4em] text-[10px] mb-4 opacity-40 font-bold">
                                01. Sound
                            </h4>
                            <p className="text-xl font-serif italic mb-2">
                                Analog Resonance
                            </p>
                            <p className="text-stone-400 text-sm">
                                Vintage turntable with a curated vinyl
                                collection from local record stores.
                            </p>
                        </div>
                        <div className="border-l border-stone-700 pl-8">
                            <h4 className="uppercase tracking-[0.4em] text-[10px] mb-4 opacity-40 font-bold">
                                02. Scent
                            </h4>
                            <p className="text-xl font-serif italic mb-2">
                                Earth Elements
                            </p>
                            <p className="text-stone-400 text-sm">
                                Custom-blended cedar, smoke, and moss essential
                                oils extracted on-site.
                            </p>
                        </div>
                        <div className="border-l border-stone-700 pl-8">
                            <h4 className="uppercase tracking-[0.4em] text-[10px] mb-4 opacity-40 font-bold">
                                03. Light
                            </h4>
                            <p className="text-xl font-serif italic mb-2">
                                Circadian Sync
                            </p>
                            <p className="text-stone-400 text-sm">
                                Smart lighting systems programmed to transition
                                with natural daylight.
                            </p>
                        </div>
                        <div className="border-l border-stone-700 pl-8">
                            <h4 className="uppercase tracking-[0.4em] text-[10px] mb-4 opacity-40 font-bold">
                                04. Sleep
                            </h4>
                            <p className="text-xl font-serif italic mb-2">
                                Restorative Cloud
                            </p>
                            <p className="text-stone-400 text-sm">
                                100% organic French linen, weighted blankets,
                                and eucalyptus silk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
)

const JourneysPage = () => {
    const spots = [
        {
            title: 'The Hidden Cove',
            category: 'Nature',
            desc: 'A private inlet 10 mins away.',
            img: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Marea Roastery',
            category: 'Dining',
            desc: 'Single origin slow bar.',
            img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Ancient Pines Trail',
            category: 'Activity',
            desc: '4.5 miles of coastal fog.',
            img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
        }
    ]

    return (
        <section className="pt-40 px-6 pb-32 max-w-7xl mx-auto animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                <div className="max-w-xl">
                    <h1 className="font-serif text-7xl text-stone-900 mb-6">
                        Local Journeys.
                    </h1>
                    <p className="text-stone-600 text-lg">
                        We've spent years exploring Big Sur so you don't have
                        to. Here are the places that hold our hearts.
                    </p>
                </div>
                <button className="flex items-center gap-3 text-stone-900 border-b-2 border-stone-900 pb-2 uppercase tracking-[0.2em] text-[10px] font-bold hover:opacity-50 transition-all group">
                    Download The Guide{' '}
                    <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {spots.map((spot, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                            <img
                                src={spot.img}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                                alt={spot.title}
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-[0.3em] font-bold">
                                {spot.category}
                            </div>
                        </div>
                        <h3 className="font-serif text-3xl text-stone-900 mb-2 transition-all">
                            {spot.title}
                        </h3>
                        <p className="text-stone-400 text-sm tracking-wide">
                            {spot.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

const ContactPage = () => {
    return (
        <section className="pt-40 px-6 min-h-screen bg-stone-50 flex items-center justify-center animate-in fade-in duration-1000">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-24 items-center mb-20">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 block font-bold">
                        Reservation Inquiries
                    </span>
                    <h1 className="font-serif text-7xl text-stone-900 mb-10 italic">
                        Say Hello.
                    </h1>
                    <p className="text-stone-600 text-lg mb-12 leading-relaxed max-w-md">
                        We prefer personal connections over automated forms.
                        Whether you're curious about a specific amenity or need
                        help planning a celebration, we are here.
                    </p>

                    <div className="flex flex-col gap-6">
                        <a
                            href="https://airbnb.com"
                            className="flex items-center justify-between w-full p-8 bg-stone-900 text-white hover:bg-stone-800 transition-all group shadow-2xl"
                        >
                            <div className="flex items-center gap-6">
                                <ExternalLink size={24} />
                                <span className="uppercase tracking-[0.3em] text-[11px] font-bold">
                                    Book on Airbnb
                                </span>
                            </div>
                            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                        </a>

                        <div className="p-8 border border-stone-200 bg-white shadow-lg">
                            <div className="flex items-center gap-4 mb-6 text-stone-900">
                                <MessageCircle
                                    size={28}
                                    className="text-stone-400"
                                />
                                <h3 className="font-serif text-2xl">
                                    Instant Messenger
                                </h3>
                            </div>
                            <p className="text-xs text-stone-400 mb-8 uppercase tracking-widest">
                                Typical response: Under 10 minutes
                            </p>
                            <button className="w-full py-5 border-2 border-stone-900 text-stone-900 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-stone-900 hover:text-white transition-all active:scale-95">
                                Open Messenger Chat
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="relative aspect-[3/4] p-10 border border-stone-200">
                        <img
                            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover grayscale brightness-90"
                            alt="The Sanctuary Workspace"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-2xl max-w-xs">
                            <p className="font-serif text-2xl leading-tight mb-4 text-stone-900">
                                "A truly ethereal experience in the wild."
                            </p>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-300">
                                — Vogue Travel
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Footer = () => (
    <footer className="bg-white border-t border-stone-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 text-stone-900">
            <div className="md:col-span-2">
                <h2 className="font-serif text-4xl mb-8 tracking-tighter">
                    THE SANCTUARY.
                </h2>
                <p className="text-stone-400 max-w-sm text-sm leading-loose uppercase tracking-widest font-light">
                    Architecture, nature, and stillness. A modern escape in Big
                    Sur.
                </p>
            </div>
            <div>
                <h4 className="uppercase tracking-[0.4em] text-[10px] font-black mb-10 text-stone-300">
                    Social
                </h4>
                <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] text-stone-500 font-bold">
                    <a
                        href="#"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Pinterest
                    </a>
                    <a
                        href="#"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Facebook
                    </a>
                </div>
            </div>
            <div>
                <h4 className="uppercase tracking-[0.4em] text-[10px] font-black mb-10 text-stone-300">
                    Location
                </h4>
                <p className="text-[11px] uppercase tracking-widest text-stone-500 leading-loose font-medium">
                    1242 Pacific Coast Hwy
                    <br />
                    Big Sur, CA 93920
                    <br />
                    USA
                </p>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] text-stone-300 font-bold">
            <span>© 2026 The Sanctuary Retreat Estate</span>
            <div className="flex gap-10">
                <a href="#" className="hover:text-stone-900 transition-colors">
                    Privacy
                </a>
                <a href="#" className="hover:text-stone-900 transition-colors">
                    Terms
                </a>
            </div>
            <span>Designed by Studio Minimal</span>
        </div>
    </footer>
)

// --- Main App Entry Point (layout.js / page.js simulation) ---

export default function App() {
    const [currentPage, setCurrentPage] = useState('home')

    // Next.js standard behavior: Scroll to top on navigation change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentPage])

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />
            case 'about':
                return <AboutPage />
            case 'journeys':
                return <JourneysPage />
            case 'contact':
                return <ContactPage />
            default:
                return <HomePage />
        }
    }

    return (
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-900 selection:text-white antialiased overflow-x-hidden">
            {/* In a production Next.js App Router:
          - Navbar and Footer would be in layout.js
          - renderContent() would be the page.js children
      */}
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <div className="content-wrapper">{renderContent()}</div>

            <Footer />

            {/* Global Floating Messenger CTA (Common in production SaaS/Rental sites) */}
            <div className="fixed bottom-10 right-10 z-50 group">
                <div className="absolute bottom-full right-0 mb-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-y-2 group-hover:translate-y-0">
                    Chat with us
                </div>
                <button className="bg-stone-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                    <MessageCircle size={28} />
                </button>
            </div>

            {/* Optimization Styles */}
            <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s infinite alternate ease-in-out;
        }
        ::selection {
          background: #1c1917;
          color: #fafaf9;
        }
        /* Hide scrollbar for cleaner look if needed */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f5f5f4;
        }
        ::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a29e;
        }
      `}</style>
        </div>
    )
}
