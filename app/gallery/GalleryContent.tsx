'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Spinner from '../components/Spinner'
import { useGalleryReducer } from '../hooks/useGalleryReducer'
import Modal from '../components/Modal'
import { getImageName } from '../utils/helpers'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function GalleryContent() {
    const { gallery, selected, images, dispatch } = useGalleryReducer()

    // handle modal navigation
    const handleChangeSelected = (direction: string) => {
        // get index from all images
        const selectedImageIndex = images.indexOf(selected.image)
        // the navigate image
        let navigateImage: string | null

        // if prev and not yet first image of selected
        if (direction === 'prev' && selected) {
            // get previous
            navigateImage = images[selectedImageIndex - 1]
        }

        // if next and not yet last image selected
        if (direction === 'next' && selectedImageIndex < images.length - 1) {
            // get next
            navigateImage = images[selectedImageIndex + 1]
        }

        // if there's an image
        if (navigateImage) {
            // index the image's gallery
            const imageGallery = gallery.filter(
                (dir: GalleryImage) => dir.files.indexOf(navigateImage) >= 0
            )

            dispatch({
                type: 'gallery/selected',
                payload: { ...imageGallery[0], image: navigateImage }
            })
        }
    }

    // get selected section index first
    const selectedImagesIndex = images?.indexOf(selected?.image)

    // check if we have gallery
    if (!gallery) {
        return <Spinner />
    }

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

                {gallery.map(
                    (item: { name: string; files: string[] }, i: number) => (
                        <GallerySection
                            item={item}
                            key={item.name}
                            handleSelect={dispatch}
                        />
                    )
                )}

                {/* MODAL */}
                {selected && (
                    <Modal
                        backdropClickHandler={() =>
                            dispatch({ type: 'gallery/unselect' })
                        }
                        modalContent={
                            <Image
                                src={`/images/gallery/${selected.name}/${selected.image}`}
                                alt={selected.name}
                                fill
                                priority
                                className="object-cover animate-blurFade"
                            />
                        }
                    >
                        <div className="grid grid-cols-3 gap-4">
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
                            <div>
                                <p className="text-white mt-3 text-center text-lg">
                                    {getImageName(selected.image)}
                                </p>
                            </div>
                            <div className="mt-3 text-lg text-white">
                                {selectedImagesIndex < images.length - 1 && (
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
                    </Modal>
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
        <ScrollFadeIn>
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
        </ScrollFadeIn>
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
                    type: 'gallery/selected',
                    payload: {
                        name,
                        image,
                        files
                    }
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
                <span className="text-white font-medium">
                    {getImageName(image)}
                </span>
            </div>
        </div>
    )
}
