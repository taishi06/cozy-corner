import { useGalleryReducer } from '../hooks/useGalleryReducer'
import { getImageName } from '../utils/helpers'
import Image from 'next/image'
import Modal from '../components/Modal'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Spinner from './Spinner'
import ScrollFadeIn from '../components/ScrollFadeIn'

export default function Gallery() {
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

    if (!gallery) {
        return <Spinner />
    }

    return (
        <>
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
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 53vw"
                            fill
                            priority
                            className="object-cover animate-blurFade"
                            placeholder="blur"
                            blurDataURL={`/images/gallery/${selected.name}/${selected.image}`}
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
                placeholder="blur"
                blurDataURL={`/images/gallery/${name}/${image}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
