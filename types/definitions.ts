interface NavLinkProps {
    name: string
    id: string
    path: string
}
interface JourneySpotProps {
    title: string
    category: string
    desc: string
    img: string
}

interface GalleryReducerState {
    gallery: GalleryImage | null
    selected: SelectedGallery | null
    images: string[] | null
}
interface SelectedGallery {
    name: string
    image: string
    files: string[]
}
interface GalleryImage {
    name?: string
    files?: string[]
}
