'use server'

import fs from 'fs'
import path from 'path'

export async function getGalleryFoldersFiles() {
    const dirPath = path.join(process.cwd(), 'public/images/gallery')
    const gallerySections = fs.readdirSync(dirPath, { withFileTypes: true })
    const galleryFolders = gallerySections
        .filter((dir) =>
            fs.statSync(`${dir.parentPath}/${dir.name}`).isDirectory()
        )
        .map((item) => {
            return { name: item.name, path: item.parentPath }
        })
    const galleryImages = [] as GalleryImage[]
    const gallery = galleryFolders.map((dir, i) => {
        return {
            name: dir.name,
            files: fs
                .readdirSync(dir.path + '/' + dir.name)
                .filter((file) => /\.(jpe?g|png)$/i.test(file.toLowerCase()))
        }
    })
    return gallery
}
