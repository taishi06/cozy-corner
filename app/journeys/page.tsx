import { ExternalLink } from 'lucide-react'

export default function page() {
    const spots: JourneySpotProps[] = [
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
