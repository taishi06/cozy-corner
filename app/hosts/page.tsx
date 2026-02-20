import Hero from '../components/Hero'

export default function HostsPage() {
    return (
        <>
            <Hero
                image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                title="Meet Your Hosts"
                subtitle="Travelers at heart."
            />

            <section className="container">
                <h2>Our Story</h2>
                <p
                    style={{
                        marginTop: '1.5rem',
                        maxWidth: '800px',
                        lineHeight: '1.8'
                    }}
                >
                    We started traveling years ago with nothing but backpacks
                    and curiosity. Along the way, we discovered the beauty of
                    hospitality and meaningful stays.
                </p>
            </section>
        </>
    )
}
