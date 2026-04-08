import { ReactNode } from 'react'

export default function page({ children }: { children: ReactNode }) {
    return <li className="flex flex-items gap-2 py-1">{children}</li>
}
