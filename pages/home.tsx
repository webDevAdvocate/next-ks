import Image from 'next/image'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

/**
 * @description
 * image component allowing to optimize images effortlessly 
 * https://nextjs.org/docs/basic-features/image-optimization
*/

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="/brainFacts.jpeg" width={200} height={200}></Image>
      </main>
    </div>
  )
}

export default Home
