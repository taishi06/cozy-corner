import Image from 'next/image'

export default function page() {
    return (
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

                <div className="grid md:grid-cols-12 gap-10">
                    <div className="md:col-span-7 relative group overflow-hidden mb-10">
                        <Image
                            fill
                            src="/images/our-story.jpeg"
                            className="object-cover w-full grayscale hover:grayscale-0 transition-all duration-1000"
                            alt="The Sanctuary Interior"
                        />
                        <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none" />
                    </div>
                    <div className="md:col-span-5 flex flex-col justify-center">
                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            Travel has always been at the heart of our journey
                            as a couple. We share a deep love for exploring new
                            places, whether it's discovering hidden gems,
                            immersing ourselves in different cultures, or simply
                            enjoying the beauty of a new destination. But beyond
                            the adventures, one thing has always mattered most
                            to us: having a comfortable place to come home to at
                            the end of each day.
                        </p>

                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            No matter how long or tiring our days were, we made
                            it a point to choose accommodations that felt warm,
                            restful, and inviting. A space where we could
                            recharge and feel at ease.
                        </p>

                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            Before the Covid-19 pandemic, we had several trips
                            lined up, plans we were incredibly excited about.
                            Unfortunately, when the world went into lockdown,
                            all those journeys were suddenly cancelled, and our
                            bookings were refunded. Like many others, we found
                            ourselves pausing, reflecting, and rethinking what
                            we could do next.
                        </p>

                        {/* <h3 className="font-serif text-4xl mb-8 italic text-stone-800">
                            The Vision
                        </h3>
                        <p className="text-stone-600 text-lg leading-loose mb-6">
                            Founded by a pair of designers in 2024, The
                            Sanctuary was built to prove that luxury doesn't
                            have to be loud. Every piece of furniture is
                            hand-selected from local artisans, and every window
                            is positioned to catch the golden hour.
                        </p>
                        <p className="text-stone-600 text-lg leading-loose opacity-80">
                            We believe that space influences state of mind. By
                            using raw materials like reclaimed cedar, concrete,
                            and unbleached linens, we invite our guests to
                            ground themselves.
                        </p> */}
                    </div>
                </div>

                <div>
                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        One evening, while reminiscing about our past travels
                        and the places we had stayed in, an idea sparked. We
                        asked ourselves: What if we could create a space that
                        offers the same comfort and experience we've always
                        looked for? That moment became the beginning of
                        something new.
                    </p>

                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        Using the refunded travel funds, we decided to take a
                        leap of faith and start our own Airbnb rental. At first,
                        we were unsure, stepping into something completely new
                        always comes with doubts. But we committed ourselves to
                        learning everything we could, paying attention to the
                        smallest details, and carefully designing a space that
                        reflects what we truly value as travelers.
                    </p>

                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        Piece by piece, we built our unit with comfort,
                        functionality, and warmth in mind-creating not just a
                        place to stay, but a space where guests can truly feel
                        at home.
                    </p>

                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        Today, what started as a simple idea born out of
                        unexpected circumstances has grown into something
                        meaningful. Hosting has allowed us to share a part of
                        our journey with others, and we're grateful to welcome
                        guests who, just like us, appreciate a cozy and
                        comfortable place to rest after a day of adventure.
                    </p>

                    <p className="text-stone-600 text-lg leading-loose mb-6">
                        And as they say, the rest is history.
                    </p>
                </div>

                <section className="bg-stone-900 text-stone-50 p-16 md:p-32 mb-40">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-5xl mb-16 leading-tight text-stone-50">
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
                                    Custom-blended cedar, smoke, and moss
                                    essential oils extracted on-site.
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
                                    Smart lighting systems programmed to
                                    transition with natural daylight.
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
                                    100% organic French linen, weighted
                                    blankets, and eucalyptus silk.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
