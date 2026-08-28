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
    gallery: GalleryFolder[] | null
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

interface GalleryFolder {
    name: string
    files: string[]
}

interface GalleryLoadedPayload {
    gallery: GalleryFolder[]
    images: string[]
}

interface GalleryLoadedAction {
    type: 'gallery/loaded'
    payload: GalleryLoadedPayload
}

interface GallerySelectedAction {
    type: 'gallery/selected'
    payload: SelectedGallery
}

interface GalleryUnselectAction {
    type: 'gallery/unselect'
}

type GalleryAction =
    | GalleryLoadedAction
    | GallerySelectedAction
    | GalleryUnselectAction
