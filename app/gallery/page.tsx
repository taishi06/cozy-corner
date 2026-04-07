'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const gallery = [
    {
        src: '/images/gallery/img1.png',
        title: 'Dog 1'
    },
    {
        src: '/images/gallery/img2.png',
        title: 'Dog 2'
    },
    {
        src: '/images/gallery/img3.png',
        title: 'Dog 3'
    }
]

export default function page() {
    const [selected, setSelected] = useState<null | {
        src: string | undefined
        title: string | undefined
    }>(null)
    // const [index, setIndex] = useState(0)
    // const [isTransitioning, setIsTransitioning] = useState(false)

    // const nextSlide = () => {
    //     setIsTransitioning(true)
    //     setTimeout(() => {
    //         setIndex((prev) => (prev + 1) % images.length)
    //         setIsTransitioning(false)
    //     }, 300)
    // }

    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 4000)
    //     return () => clearInterval(interval)
    // }, [])

    // get selected index
    const selectedIndex = gallery.map((img) => img.src).indexOf(selected?.src)

    const handleChangeSelected = (direction: string) => {
        // if prev and not yet first image of selected
        if (direction === 'prev' && selectedIndex > 0) {
            setSelected(gallery[selectedIndex - 1])
        }

        // if next and not yet last image selected
        if (direction === 'next' && selectedIndex < gallery.length - 1) {
            setSelected(gallery[selectedIndex + 1])
        }
    }

    return (
        <>
            {/* <div className="pt-40 animate-in slide-in-from-bottom-6 duration-1000">
                <div className="relative w-full h-[400px] overflow-hidden">
                    <Image
                        src={images[index]}
                        alt="slider"
                        fill
                        className={`object-cover transition-all duration-300 ${isTransitioning ? 'blur-md opacity-50 scale-105' : 'blur-0 opacity-100 scale-100'}`}
                    />
                </div>
            </div> */}

            <section className="pt-40 animate-in slide-in-from-bottom-6 duration-1000">
                {/* SECTION TITLE */}
                <h2 className="text-2xl font-semibold mb-4">
                    Explore the Space
                </h2>

                {/* GALLERY GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {gallery.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setSelected(item)}
                            className="relative cursor-pointer group overflow-hidden rounded-xl"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={500}
                                height={400}
                                loading="lazy"
                                className="object-cover w-full h-40 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                            />

                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <span className="text-white font-medium">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL */}
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* BACKDROP */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setSelected(null)}
                        />

                        {/* POP-OUT IMAGE */}
                        <div className="relative z-10 max-w-4xl w-full p-4">
                            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                                <Image
                                    src={selected.src}
                                    alt={selected.title}
                                    fill
                                    priority
                                    className="object-cover animate-blurFade"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="mt-3 text-lg text-white">
                                    {selectedIndex > 0 && (
                                        <button
                                            onClick={() =>
                                                handleChangeSelected('prev')
                                            }
                                            className="cursor-pointer flex items-center gap-2"
                                        >
                                            <ArrowLeft /> Previous
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <p className="text-white mt-3 text-center text-lg">
                                        {selected.title}
                                    </p>
                                </div>
                                <div className="mt-3 text-lg text-white">
                                    {selectedIndex < gallery.length - 1 && (
                                        <button
                                            onClick={() =>
                                                handleChangeSelected('next')
                                            }
                                            className="cursor-pointer flex items-center gap-2 float-right"
                                        >
                                            Next <ArrowRight />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
