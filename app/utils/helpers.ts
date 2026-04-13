export function getImageName(name: string): string {
    // remove last instance of text with period
    const nameOnly = name.substring(0, name.lastIndexOf('.'))

    // replace dash/hyphen with space
    return nameOnly.replaceAll('-', ' ')
}
