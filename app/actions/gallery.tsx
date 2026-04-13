'use server'

import fs from 'fs'
import path from 'path'

export async function getGalleryFoldersFiles() {
    // get gallery path
    const dirPath = path.join(process.cwd(), 'public/images/gallery')

    // read folders
    const gallerySections = fs.readdirSync(dirPath, { withFileTypes: true })

    // filter necessary folders and return only needed
    const galleryFolders = gallerySections
        .filter((dir) =>
            fs.statSync(`${dir.parentPath}/${dir.name}`).isDirectory()
        )
        .map((item) => {
            return { name: item.name, path: item.parentPath }
        })

    // get folder's files
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
