import type { NextPage } from 'next'
import Head from 'next/head'
import { getQuestions } from '../../src/getQuestion'
import styles from '../../styles/Home.module.css'

/**
 * @description
 * SSG data fetching on non dynamic page
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
*/

interface Props {
  numberOfQuestions: number
}

const AdvertiseWithUs: NextPage<Props> = ({numberOfQuestions}: Props) => {
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
        {numberOfQuestions && (<p>
          Our base contains more than {numberOfQuestions} questions
        </p>)}
      </main>
    </div>
  )
}

export default AdvertiseWithUs


export async function getStaticProps() {

  const questions = await getQuestions();

  return {
    props: {numberOfQuestions: questions.length},
    revalidate: 10
  }
}