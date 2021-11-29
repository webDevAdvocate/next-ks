import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

/**
 * @description
 * static /advertise route
 * https://nextjs.org/docs/routing/introduction
*/

const AdvertiseWithUs: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advertise with us</title>
        <meta name="description" content="Reach 300M+ monthly audience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Advertise wit us
        </h1>
      </main>
    </div>
  )
}

export default AdvertiseWithUs
