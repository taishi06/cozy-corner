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
