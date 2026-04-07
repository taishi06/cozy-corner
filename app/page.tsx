'use client'

import { Wind, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

/**
 * PRODUCTION-READY NEXT.JS STRUCTURE (Single File Entry Point)
 * Includes Tailwind CDN for immediate preview rendering.
 */

// const slides = [
//     {
//         path: '/images/slides/pool-area.jpg',
//         alt: 'SMDC Leaf Residences pool area'
//     },
//     {
//         path: '/images/slides/bedroom.jpeg',
//         alt: 'SMDC Leaf Bedroom'
//     },
//     {
//         path: '/images/slides/bldg-entrance.jpeg',
//         alt: 'SMDC Bldg entrance'
//     }
// ]

export default function App() {
    // const [index, setIndex] = useState(0)
    // const [isTransitioning, setIsTransitioning] = useState(false)

    // const nextSlide = () => {
    //     setIsTransitioning(true)
    //     setTimeout(() => {
    //         setIndex((prev) => (prev + 1) % slides.length)
    //         setIsTransitioning(false)
    //     }, 300)
    // }

    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 4000)
    //     return () => clearInterval(interval)
    // }, [])

    const sectionRef = useRef<any>()

    const scrollToExplore = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className="animate-in fade-in duration-1000">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-stone-900/40 z-10" />
                <Image
                    fill
                    quality={80}
                    src="/images/slides/pool-area.jpg"
                    className="object-cover scale-105 animate-slow-zoom"
                    alt="SMDC Leaf Residences pool area"
                />
                {/* <Image
                    fill
                    quality={80}
                    src={slides[index]['path']}
                    className={`object-cover scale-105 animate-slow-zoom transition-all duration-300 ${isTransitioning ? 'blur-md opacity-50 scale-105' : 'blur-0 opacity-100 scale-100'}`}
                    alt={slides[index]['alt']}
                /> */}
                <div className="relative z-20 text-center px-6">
                    <span className="text-white uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-medium">
                        Relax • Unwind
                    </span>
                    <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-tight">
                        Stillness <br />{' '}
                        <span className="italic">Defined.</span>
                    </h1>
                    <button
                        onClick={scrollToExplore}
                        className="bg-white text-stone-900 px-12 py-4 text-xs cursor-pointer uppercase tracking-widest font-bold hover:bg-stone-100 transition-all shadow-xl active:scale-95"
                    >
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

            <section className="py-32 px-6 bg-stone-50" ref={sectionRef}>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-10 leading-[1.1]">
                            A sanctuary designed for comfort and relaxation.
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-10">
                            Located at the City of Muntinlupa, our unit is a
                            curated experiment in architecture and comfort.
                            We've stripped away the unnecessary to let the place
                            speak for itself. Experience a comfort where time
                            feels suspended.
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
                                src="/images/room/bed-view.jpg"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                alt="Kitchen Detail"
                            />
                        </div>
                        <div className="relative overflow-hidden aspect-square mt-16">
                            <img
                                src="/images/room/full-view.jpg"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                alt="Bedroom Detail"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
