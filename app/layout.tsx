import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Probá nuestra IA - ReTrash',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={`flex flex-col items-center justify-center ${inter.className}`}>
                <header className="flex justify-center items-center w-full p-4 border-b border-b-[#DFDFDF]">
                    <div className="relative h-8 w-[90px]">
                        <Image src="/logotipo.svg" alt='ReTrash Logo' fill />
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}
