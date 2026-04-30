import Link, { LinkProps } from 'next/link'
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
        <Link
            href={`/worldwise/${slug}` as LinkProps<any>['href']}
            className={styles.card}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{cities.length} cities visited</p>
            </div>
        </Link>
    )
}
