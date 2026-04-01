import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-stone-100 py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 text-stone-900">
                <div className="md:col-span-2">
                    <h2 className="font-serif text-4xl mb-8 tracking-tighter">
                        THE SANCTUARY.
                    </h2>
                    <p className="text-stone-400 max-w-sm text-sm leading-loose uppercase tracking-widest font-light">
                        Architecture, nature, and stillness. A modern escape in
                        Big Sur.
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
                    <a
                        href="#"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Privacy
                    </a>
                    <a
                        href="#"
                        className="hover:text-stone-900 transition-colors"
                    >
                        Terms
                    </a>
                </div>
                {/* <span>Designed by Studio Minimal</span> */}
            </div>
        </footer>
    )
}
