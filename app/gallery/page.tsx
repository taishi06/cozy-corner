import GalleryContent from './GalleryContent'
import { getGalleryFoldersFiles } from '../actions/gallery'

export const metadata = {
    title: 'Explore Your Stay | Cozy Prime Stay Gallery & Property Photos',
    description:
        'See why guests love Cozy Prime Stay. View our gallery to explore the beautiful design and comfort of our property. Your perfect "home away from home" starts here.'
}

export default async function Page() {
    const initialGallery = await getGalleryFoldersFiles()

    return <GalleryContent initialGallery={initialGallery} />
}
