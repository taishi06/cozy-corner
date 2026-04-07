import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Logo({ isScrolled }: { isScrolled: boolean }) {
    const pathName = usePathname()

    return (
        <Link
            href="/"
            className={`font-serif text-2xl tracking-tighter transition-colors ${
                isScrolled
                    ? 'text-stone-900'
                    : // : 'text-stone-900 md:text-white'
                      pathName === '/'
                      ? 'text-white'
                      : 'text-stone-900'
            }`}
        >
            {process.env.NEXT_PUBLIC_APP_TITLE}
        </Link>
    )
}
