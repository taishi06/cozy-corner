'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>StayWithUs</div>

            <div
                className={`${styles.hamburger} ${open ? styles.active : ''}`}
                onClick={() => setOpen(!open)}
            >
                <span />
                <span />
                <span />
            </div>

            <div className={`${styles.links} ${open ? styles.show : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/airbnb">Airbnb</Link>
                <Link href="/hosts">Hosts</Link>
                <Link href="/worldwise">Worldwise</Link>
            </div>
        </nav>
    )
}
