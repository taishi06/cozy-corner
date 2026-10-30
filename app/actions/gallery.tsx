'use server';

import fs from 'fs';
import path from 'path';
import { galleryImagePlaceholders } from '../gallery/imagePlaceholders';

export async function getGalleryFoldersFiles() {
	// get gallery path
	const dirPath = path.join(process.cwd(), 'public/images/gallery');

	// read folders
	const gallerySections = fs.readdirSync(dirPath, { withFileTypes: true });

	// filter necessary folders and return only needed
	const galleryFolders = gallerySections
		.filter((dir) =>
			fs.statSync(`${dir.parentPath}/${dir.name}`).isDirectory(),
		)
		.map((item) => {
			return { name: item.name, path: item.parentPath };
		});

	// get folder's files and their pre-generated blur placeholders
	const gallery = galleryFolders.map((dir) => {
		const files = fs
			.readdirSync(dir.path + '/' + dir.name)
			.filter((file) => /\.(jpe?g|png)$/i.test(file.toLowerCase()));

		return {
			name: dir.name,
			files,
			blurDataURLs: Object.fromEntries(
				files.map((file) => [
					file,
					galleryImagePlaceholders[`${dir.name}/${file}`],
				]),
			),
		};
	});

	return gallery;
}
