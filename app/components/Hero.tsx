import Image from 'next/image'
import styles from './Hero.module.css'

interface HeroProps {
    image: string
    title: string
    subtitle?: string
    height?: string
}

export default function Hero({
    image,
    title,
    subtitle,
    height = '80vh'
}: HeroProps) {
    return (
        <section className={styles.hero} style={{ height }}>
            <Image
                src={image}
                alt={title}
                fill
                priority
                className={styles.image}
            />
            <div className={styles.overlay}>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </section>
    )
}
