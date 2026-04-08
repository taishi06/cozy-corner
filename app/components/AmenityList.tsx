import { ReactNode } from 'react'

export default function page({
    name,
    icon,
    children
}: {
    name: string
    icon: ReactNode
    children: ReactNode
}) {
    return (
        <div className="border-l border-stone-700 pl-8">
            <p className="text-xl font-serif italic mb-2 flex flex-items gap-2">
                {icon} {name}
            </p>
            <ul className="text-stone-400 text-sm">{children}</ul>
        </div>
    )
}
