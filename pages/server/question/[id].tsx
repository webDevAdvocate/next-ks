import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import {Question} from '../../../src/types';
import { getQuestion } from '../../../src/getQuestion';

/**
 * @description
 * Dynamic routing with one query param, server side data fetching
 * https://nextjs.org/docs/routing/dynamic-routes
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
*/

interface Props {question: Question};

const Question: NextPage<Props> = ({question}: Props) => {
    const router = useRouter();

    const {id} = router.query;

    return (
        <div className={styles.container}>
        <Head>
            <title>Question</title>
            <meta name="description" content="Reach 300M+ monthly audience" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Question {id}
            </h1>
            <p>
                {question?.content}
            </p>
        </main>
        </div>
    )
}

export default Question


export async function getServerSideProps(context: {params: {id: number}}) {
    const {id} = context.params;

    const question = await getQuestion(id);

    return {
      props: {question},
      notFound: question ? false : true,
    }
  }
