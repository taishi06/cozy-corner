import Image from 'next/image'
import styles from './ImageGallery.module.css'

interface Props {
    images: string[]
}

export default function ImageGallery({ images }: Props) {
    return (
        <div className={styles.gallery}>
            {images.map((src, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={src}
                        alt="Travel photo"
                        fill
                        className={styles.image}
                    />
                </div>
            ))}
        </div>
    )
}
