import Hero from './components/Hero'

export default function HomePage() {
    return (
        <>
            <Hero
                image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                title="Stay With Us. Travel With Us."
                subtitle="A home built by travelers, for travelers."
            />

            <section className="container">
                <h2>Our Airbnb</h2>
                <p style={{ marginTop: '1rem', maxWidth: '700px' }}>
                    A warm and thoughtfully designed space made to feel like
                    home — whether you're staying for a weekend or a month.
                </p>

                <a href="/airbnb" className="btn" style={{ marginTop: '2rem' }}>
                    View the Home
                </a>
            </section>

            <section style={{ background: 'var(--soft)' }}>
                <div className="container">
                    <h2>Worldwise Travels</h2>
                    <p style={{ marginTop: '1rem', maxWidth: '700px' }}>
                        Every journey shapes how we host. Discover the cities
                        and cultures that inspired us.
                    </p>

                    <a
                        href="/worldwise"
                        className="btn"
                        style={{ marginTop: '2rem' }}
                    >
                        Explore Our Travels
                    </a>
                </div>
            </section>
        </>
    )
}
