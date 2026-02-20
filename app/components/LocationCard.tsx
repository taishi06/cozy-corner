import Link from 'next/link'
import Image from 'next/image'
import styles from './LocationCard.module.css'

interface Props {
    slug: string
    title: string
    image: string
    cities: string[]
}

export default function LocationCard({ slug, title, image, cities }: Props) {
    return (
        <Link href={`/worldwise/${slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image src={image} alt={title} fill className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{cities.length} cities visited</p>
            </div>
        </Link>
    )
}
