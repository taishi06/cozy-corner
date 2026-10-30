import { useState } from 'react'
import { useGalleryReducer } from '../hooks/useGalleryReducer'
import { getImageName } from '../utils/helpers'
import Image from 'next/image'
import Modal from '../components/Modal'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function Gallery({
    initialGallery
}: {
    initialGallery: GalleryFolder[]
}) {
    const { gallery, selected, images, dispatch } =
        useGalleryReducer(initialGallery)

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
                (dir: GalleryFolder) => dir.files.indexOf(navigateImage) >= 0
            )

            dispatch({
                type: 'gallery/selected',
                payload: { ...imageGallery[0], image: navigateImage }
            })
        }
    }

    // get selected section index first
    const selectedImagesIndex = images.indexOf(selected?.image)

    return (
        <>
            {gallery.map((item: GalleryFolder) => (
                <GallerySection
                    item={item}
                    key={item.name}
                    handleSelect={dispatch}
                />
            ))}

            {/* MODAL */}
            {selected && (
                <Modal
                    backdropClickHandler={() =>
                        dispatch({ type: 'gallery/unselect' })
                    }
                    modalContent={
                        <GalleryModalImage
                            key={`${selected.name}/${selected.image}`}
                            src={`/images/gallery/${selected.name}/${selected.image}`}
                            alt={selected.name}
                            blurDataURL={
                                gallery.find(
                                    (item) => item.name === selected.name
                                )?.blurDataURLs[selected.image]
                            }
                        />
                    }
                >
                    <div className="grid grid-cols-3 gap-4">
                        <div className="mt-3 text-lg text-white">
                            {selectedImagesIndex > 0 && (
                                <button
                                    onClick={() => handleChangeSelected('prev')}
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
                                    onClick={() => handleChangeSelected('next')}
                                    className="cursor-pointer flex items-center gap-2 float-right"
                                >
                                    Next <ArrowRight />
                                </button>
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

function GalleryModalImage({
    src,
    alt,
    blurDataURL
}: {
    src: string
    alt: string
    blurDataURL?: string
}) {
    const [loaded, setLoaded] = useState(false)
    const [failed, setFailed] = useState(false)

    return (
        <>
            {!loaded && !failed && (
                <div
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/10"
                    role="status"
                    aria-label="Loading image"
                >
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/40 border-t-white" />
                </div>
            )}
            {failed ? (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/60 text-white"
                    role="alert"
                >
                    This image couldn&apos;t be loaded.
                </div>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 53vw"
                    fill
                    priority
                    placeholder={blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={blurDataURL}
                    onLoad={() => setLoaded(true)}
                    onError={() => setFailed(true)}
                    className="object-cover"
                />
            )}
        </>
    )
}

function GallerySection({
    item,
    handleSelect
}: {
    item: GalleryFolder
    handleSelect: (action: GalleryAction) => void
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
                            blurDataURL={item.blurDataURLs[dir]}
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
    blurDataURL,
    handleSelect
}: {
    name: string
    image: string
    files: string[]
    blurDataURL?: string
    handleSelect: (action: GalleryAction) => void
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
                placeholder={blurDataURL ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                sizes="(max-width: 767px) calc(50vw - 2rem), (max-width: 1023px) calc(25vw - 3rem), 21vw"
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
