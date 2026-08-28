/**
 * Returns formatted image name by removing the file extension and replacing dashes with spaces.
 *
 * @param name string - The original image file name (e.g., "living-room.jpg").
 * @returns string - The formatted image name.
 */
export function getImageName(name: string): string {
    // remove last instance of text with period
    const nameOnly = name.substring(0, name.lastIndexOf('.'))

    // replace dash/hyphen with space
    return nameOnly.replaceAll('-', ' ')
}
