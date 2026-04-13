import { MouseEventHandler, ReactNode } from 'react'

export default function Modal({
    backdropClickHandler,
    modalContent,
    children
}: {
    backdropClickHandler: MouseEventHandler
    modalContent: ReactNode
    children: ReactNode
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={backdropClickHandler}
            />

            {/* POP-OUT IMAGE */}
            <div className="relative z-10 max-w-4xl w-full p-4">
                <div className="relative w-full h-100 md:h-125 rounded-xl overflow-hidden">
                    {modalContent}
                </div>

                {children}
            </div>
        </div>
    )
}
