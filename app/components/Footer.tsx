import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} StayWithUs</p>
            <p>Made with love and wanderlust 🌍</p>
        </footer>
    )
}
