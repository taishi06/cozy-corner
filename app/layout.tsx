import './styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
    title: 'Stay With Us | Travel With Us',
    description: 'Airbnb hosted by travelers. Explore our worldwise journey.'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
