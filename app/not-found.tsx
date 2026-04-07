import Link from 'next/link'

function NotFound() {
    return (
        <section className="mt-40 animate-in slide-in-from-bottom-6 duration-1000 px-6 text-center bg-stone-300">
            <h1 className="text-3xl font-semibold">
                This page could not be found :(
            </h1>
            <Link
                href="/"
                className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
            >
                Go back home
            </Link>
        </section>
    )
}

export default NotFound
