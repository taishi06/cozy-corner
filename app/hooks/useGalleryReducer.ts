import { useReducer } from 'react'

const initialState: GalleryReducerState = {
    gallery: null,
    selected: null,
    images: null
}

function reducer(
    state: GalleryReducerState,
    action: { type: string; payload?: any }
) {
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

    return {
        gallery,
        selected,
        images,
        dispatch
    }
}
