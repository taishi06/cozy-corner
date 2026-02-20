import Hero from '../components/Hero'
import ImageGallery from '../components/ImageGallery'

export default function AirbnbPage() {
    return (
        <>
            <Hero
                image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                title="Our Airbnb Home"
                subtitle="Comfort, warmth, and thoughtful design."
            />

            <section className="container">
                <h2>The Space</h2>
                <p style={{ marginTop: '1rem', maxWidth: '700px' }}>
                    Designed for comfort and calm — natural light, cozy
                    textures, and intentional details throughout.
                </p>
            </section>

            <section>
                <ImageGallery
                    images={[
                        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
                        'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
                        'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
                    ]}
                />
            </section>
        </>
    )
}
