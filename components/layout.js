import Head from 'next/head';
import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Nikhil Kadyan</title>
                <meta name="description" content="My random content blog :)" />
            </Head>
            <main className="px-5 sm:px-24 pb-8 mt-20 sm:mt-32 w-full">
                <Navbar />
                {children}
            </main>
        </>
    )
}
