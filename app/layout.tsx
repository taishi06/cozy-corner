// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// import { useEffect } from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './globals.css'

export const metadata = {
    title: 'Cozy Corner - Stay With Us | Travel With Us',
    description: 'Airbnb hosted by Issa and Ter and explore our journeys.'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {/* <Navbar /> */}
                <main>
                    <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-900 selection:text-white antialiased overflow-x-hidden">
                        {/* <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
                        <Navigation />

                        <div className="content-wrapper">{children}</div>

                        <Footer />

                        {/* Global Floating Messenger CTA */}
                        {/* <div className="fixed bottom-10 right-10 z-50 group">
							<div className="absolute bottom-full right-0 mb-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap translate-y-2 group-hover:translate-y-0">
								Chat with us
							</div>
							<button className="bg-stone-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
								<MessageCircle size={28} />
							</button>
						</div> */}
                    </div>
                </main>
            </body>
        </html>
    )
}
