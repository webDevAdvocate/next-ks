import type { NextPage } from 'next'
import {useEffect} from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

/**
 * @description
 * Dynamic routes, multiple query params (slug)
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
*/

const QuestionByMarket: NextPage = () => {
    const router = useRouter();

    const params = router.query.subjectPath;

    useEffect(() => {
        if (params && (!Array.isArray(params) || params.length != 2)) {
            router.push('/404');
        }
      }, [params])

    if (!params || !Array.isArray(params) || params.length != 2) {
        return <div className={styles.main}>...Loading</div>;
    }

    const [subjectId, gradeId] = params;

    return (
        <div className={styles.container}>
        <Head>
            <title>Question</title>
            <meta name="description" content="Reach 300M+ monthly audience" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Subject {subjectId} Grade {gradeId}
            </h1>
        </main>
        </div>
    )
}

export default QuestionByMarket
