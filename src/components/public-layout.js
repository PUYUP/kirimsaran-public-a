import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function PublicLayout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kirim Saran</title>
                <meta name="description" content="Kirim ulasan dan saran secara Anonim (privat)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${styles.main} sm:container mx-auto`}>
                <div className="max-w-lg mx-auto pt-5 pb-5">
                    {children}
                </div>
            </main>
        </>
    )
}