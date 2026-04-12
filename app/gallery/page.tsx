'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getGalleryFoldersFiles } from '../actions/gallery'
import Spinner from '../components/Spinner'

export default function page() {
    const [gallery, setGallery] = useState(null)
    const [selected, setSelected] = useState<null | {
        name: string
        image: string
        files: string[]
    }>(null)
    const [images, setImages] = useState<string[]>([])

    // handle modal navigation
    const handleChangeSelected = (direction: string) => {
        // get index from all images
        const selectedImageIndex = images.indexOf(selected.image)

        // if prev and not yet first image of selected
        if (direction === 'prev' && selected) {
            // get previous
            const prevImage = images[selectedImageIndex - 1]

            // index the prevImage's gallery
            const prevImageGallery = gallery.filter(
                (dir: GalleryImage) => dir.files.indexOf(prevImage) >= 0
            )
            setSelected({ ...prevImageGallery[0], image: prevImage })
        }

        // if next and not yet last image selected
        if (direction === 'next' && selectedImageIndex < images.length - 1) {
            // get next
            const nextImage = images[selectedImageIndex + 1]

            // index the nextImage's gallery
            const nextImageGallery = gallery.filter(
                (dir: GalleryImage) => dir.files.indexOf(nextImage) >= 0
            )
            setSelected({ ...nextImageGallery[0], image: nextImage })
        }
    }

    // get selected section index first
    const selectedImagesIndex = images?.indexOf(selected?.image)

    useEffect(() => {
        const fetchGallery = async () => {
            // fetch gallery images
            const galleryImages = await getGalleryFoldersFiles()
            setGallery(galleryImages)

            // set images for later use
            const images: string[] = []
            galleryImages.forEach((gallery) => {
                images.push(...gallery.files)
            })
            setImages(images)
        }
        fetchGallery()
    }, [])

    if (!gallery) {
        return <Spinner />
    }

    return (
        <>
            <section className="pt-40 animate-in slide-in-from-bottom-6 duration-1000">
                {gallery.map(
                    (item: { name: string; files: string[] }, i: number) => (
                        <GallerySection
                            item={item}
                            key={item.name}
                            handleSelect={setSelected}
                        />
                    )
                )}

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
                                    src={`/images/gallery/${selected.name}/${selected.image}`}
                                    alt={selected.name}
                                    fill
                                    priority
                                    className="object-cover animate-blurFade"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-3 text-lg text-white">
                                    {selectedImagesIndex > 0 && (
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
                                {/* <div>
                                    <p className="text-white mt-3 text-center text-lg">
                                        {selected.image}
                                    </p>
                                </div> */}
                                <div className="mt-3 text-lg text-white">
                                    {selectedImagesIndex <
                                        images.length - 1 && (
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

function GallerySection({
    item,
    handleSelect
}: {
    item: GalleryImage
    handleSelect: Function
}) {
    return (
        <div className="mb-10">
            {/* SECTION TITLE */}
            <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.files?.map((dir, i) => (
                    <GalleryImage
                        handleSelect={handleSelect}
                        name={item.name}
                        image={dir}
                        files={item.files}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

function GalleryImage({
    name,
    image,
    files,
    handleSelect
}: {
    name: string
    image: string
    files: string[]
    handleSelect: Function
}) {
    return (
        <div
            onClick={() =>
                handleSelect({
                    name,
                    image,
                    files
                })
            }
            className="relative cursor-pointer group overflow-hidden rounded-xl"
        >
            <Image
                src={`/images/gallery/${name}/${image}`}
                alt={image}
                width={500}
                height={400}
                loading="lazy"
                className="object-cover w-full h-40 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium">{image}</span>
            </div>
        </div>
    )
}
