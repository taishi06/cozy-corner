'use client'

import Spinner from '../components/Spinner'
import ScrollFadeIn from '../components/ScrollFadeIn'
import { Suspense, useMemo } from 'react'
import Gallery from '../components/Gallery'

export default function GalleryContent() {
    const memoizedGallery = useMemo(() => {
        return <Gallery />
    }, [])
    return (
        <>
            <section className="pt-40">
                <ScrollFadeIn>
                    <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-8">
                        {/* <h1 className="font-serif text-7xl md:text-9xl text-stone-900 leading-none">
                            The Place.
                        </h1> */}
                        <h1 className="font-serif text-7xl text-stone-900 mb-10 italic">
                            The Place.
                        </h1>
                        <p className="text-stone-500 uppercase tracking-widest text-xs font-bold md:mb-4">
                            Repository & Showroom
                        </p>
                    </header>
                </ScrollFadeIn>

                <ScrollFadeIn>
                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        Step into our curated gallery and get a closer look at
                        the spaces designed for your comfort and relaxation.
                        Each photo captures the details that make your stay
                        special. From thoughtfully styled interiors and cozy
                        sleeping areas to functional amenities and inviting
                        common spaces.
                    </p>
                </ScrollFadeIn>

                <ScrollFadeIn>
                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        Browse through different sections of the property,
                        including bed space, bathroom, dining, kitchen, and
                        outdoor spaces, to get a true feel of what to expect
                        during your stay. Whether you're planning a short
                        getaway or a longer retreat, our gallery gives you a
                        transparent and immersive preview of your home away from
                        home.
                    </p>
                </ScrollFadeIn>

                <ScrollFadeIn>
                    <p className="text-stone-600 text-lg leading-loose mb-15">
                        We believe that where you stay is just as important as
                        where you go. Let these images help you envision your
                        experience and discover the comfort, convenience, and
                        warmth that await you.
                    </p>
                </ScrollFadeIn>

                <Suspense fallback={<Spinner />}>{memoizedGallery}</Suspense>
            </section>
        </>
    )
}
