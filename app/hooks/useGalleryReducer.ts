import { useEffect, useReducer } from 'react'
import { getGalleryFoldersFiles } from '../actions/gallery'

const initialState: GalleryReducerState = {
    gallery: null,
    selected: null,
    images: null
}

function reducer(
    state: GalleryReducerState,
    action: GalleryAction
): GalleryReducerState {
    switch (action.type) {
        case 'gallery/loaded':
            const { gallery, images } = action.payload
            return {
                ...state,
                gallery,
                images
            }
        case 'gallery/selected':
            return {
                ...state,
                selected: action.payload
            }
        case 'gallery/unselect':
            return {
                ...state,
                selected: null
            }
        default:
            throw new Error('Unknown dispatch type...')
    }
}

export function useGalleryReducer() {
    const [{ gallery, selected, images }, dispatch] = useReducer(
        reducer,
        initialState
    )

    useEffect(() => {
        const fetchGallery = async (): Promise<void> => {
            // fetch gallery images
            const galleryImages: GalleryFolder[] =
                await getGalleryFoldersFiles()

            // set images for later use
            const images: string[] = []
            galleryImages.forEach((gallery) => {
                images.push(...gallery.files)
            })

            dispatch({
                type: 'gallery/loaded',
                payload: { gallery: galleryImages, images: images }
            })
        }
        fetchGallery()
    }, [])

    return {
        gallery,
        selected,
        images,
        dispatch
    }
}
