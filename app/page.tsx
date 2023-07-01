import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex flex-col gap-6 items-center pt-6 text-dark px-6">
            <h1 className='text-3xl font-bold text-center'>Probá nuestra <em className='text-accent not-italic'>inteligencia artificial</em></h1>
            <p className='text-base text-center'>Apuntá a un producto y averiguá si es reciclable o no.</p>
        </main>
    )
}
