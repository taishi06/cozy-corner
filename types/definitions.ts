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
    gallery: GalleryFolder[]
    selected: SelectedGallery | null
    images: string[]
}
interface SelectedGallery {
    name: string
    image: string
    files: string[]
}
interface GalleryFolder {
    name: string
    files: string[]
    blurDataURLs: Record<string, string | undefined>
}

interface GallerySelectedAction {
    type: 'gallery/selected'
    payload: SelectedGallery
}

interface GalleryUnselectAction {
    type: 'gallery/unselect'
}

type GalleryAction = GallerySelectedAction | GalleryUnselectAction
