import Link from 'next/link'

export default function Logo({ isScrolled }: { isScrolled: boolean }) {
    return (
        <Link
            href="/"
            className={`font-serif text-2xl tracking-tighter transition-colors ${
                isScrolled
                    ? 'text-stone-900'
                    : // : 'text-stone-900 md:text-white'
                      'text-stone-900'
            }`}
        >
            Cozy Corner
        </Link>
    )
}
