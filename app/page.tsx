'use client'

import { Wind, Star } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import Stats from '@/app/components/Stats'
import Link, { LinkProps } from 'next/link'
import ScrollFadeIn from './components/ScrollFadeIn'

/**
 * PRODUCTION-READY NEXT.JS STRUCTURE (Single File Entry Point)
 * Includes Tailwind CDN for immediate preview rendering.
 */

export default function App() {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <ScrollFadeIn>
                    <div className="absolute inset-0 bg-stone-900/40 z-10" />
                    <Image
                        fill
                        quality={80}
                        src="/images/slides/pool-area.jpg"
                        className="object-cover scale-105 animate-slow-zoom"
                        alt="SMDC Leaf Residences pool area"
                    />
                    <div className="relative z-20 text-center px-6">
                        <span className="text-white uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-medium">
                            Relax • Unwind
                        </span>
                        <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-tight">
                            Stillness <br />{' '}
                            <span className="italic">Defined.</span>
                        </h1>
                        <Link
                            href={'/gallery' as LinkProps<any>['href']}
                            className="bg-white text-stone-900 px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-all shadow-xl active:scale-95"
                        >
                            Explore The Space
                        </Link>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest opacity-60">
                            Scroll
                        </span>
                        <Wind size={20} />
                    </div>
                </ScrollFadeIn>
            </section>

            <section className="w-full py-16 px-6 bg-linear-to-br from-rose-50 to-white">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <ScrollFadeIn>
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full">
                                <Star className="text-rose-500" />
                                <span className="font-semibold text-sm text-gray-700">
                                    Airbnb Superhost
                                </span>
                            </div>
                        </div>
                    </ScrollFadeIn>

                    {/* Title */}
                    <ScrollFadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Recognized as a Superhost for{' '}
                            {process.env.NEXT_PUBLIC_AIRBNB_SUPERHOST_YEARS}{' '}
                            Consecutive Years
                        </h2>
                    </ScrollFadeIn>

                    {/* Description */}
                    <ScrollFadeIn>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            We’re proud to be consistently recognized for
                            delivering exceptional guest experiences. Our
                            commitment to cleanliness, comfort, and hospitality
                            has earned us the Airbnb Superhost status year after
                            year.
                        </p>
                    </ScrollFadeIn>

                    {/* Stats */}
                    <ScrollFadeIn>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                            <Stats
                                stat={`${process.env.NEXT_PUBLIC_AIRBNB_AVG_RATING}★`}
                                statName="Average Rating"
                            />
                            <Stats
                                stat={`${process.env.NEXT_PUBLIC_AIRBNB_HAPPY_GUESTS}`}
                                statName="Happy Guests"
                            />
                            <Stats
                                stat={`${process.env.NEXT_PUBLIC_AIRBNB_SUPERHOST_YEARS} Years`}
                                statName="Superhost Status"
                            />
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            <section className="py-10 px-6 bg-stone-50">
                <ScrollFadeIn>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-10 leading-[1.1]">
                                A sanctuary designed for comfort and relaxation.
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed mb-10">
                                Located at the City of Muntinlupa, our unit is a
                                curated experiment in architecture and comfort.
                                We've stripped away the unnecessary to let the
                                place speak for itself. Experience a comfort
                                where time feels suspended.
                            </p>
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
                </ScrollFadeIn>
            </section>
        </>
    )
}
