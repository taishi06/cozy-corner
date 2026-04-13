import LocationCard from '../components/LocationCard'

const locations = [
    {
        slug: 'japan',
        title: 'Japan',
        image: '/images/locations/japan/cover.jpg',
        cities: ['Tokyo', 'Kyoto', 'Osaka']
    },
    {
        slug: 'france',
        title: 'France',
        image: '/images/locations/france/cover.jpg',
        cities: ['Paris', 'Nice']
    }
]

export default function WorldwisePage() {
    return (
        <section style={{ padding: '4rem 3rem' }}>
            <h1>Worldwise</h1>
            <div className="worldwise-grid">
                {locations.map((loc) => (
                    <LocationCard key={loc.slug} {...loc} />
                ))}
            </div>
        </section>
    )
}
