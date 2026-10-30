import { useReducer } from 'react'

function reducer(
    state: GalleryReducerState,
    action: GalleryAction
): GalleryReducerState {
    switch (action.type) {
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

export function useGalleryReducer(initialGallery: GalleryFolder[]) {
    const [{ gallery, selected, images }, dispatch] = useReducer(
        reducer,
        initialGallery,
        (gallery): GalleryReducerState => ({
            gallery,
            selected: null,
            images: gallery.flatMap((section) => section.files)
        })
    )

    return {
        gallery,
        selected,
        images,
        dispatch
    }
}
