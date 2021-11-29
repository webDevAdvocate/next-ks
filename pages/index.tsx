import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

/**
 * @description
 * home route /
*/

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Better Brainly</title>
        <meta name="description" content="Brainy but better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to better Brainly
        </h1>
      </main>
    </div>
  )
}

export default Home
