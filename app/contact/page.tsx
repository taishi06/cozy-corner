import { ChevronRight, ExternalLink, MessageCircle } from 'lucide-react'

export default function Page() {
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
                            href="https://www.airbnb.com/rooms/1314407911171467315"
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
