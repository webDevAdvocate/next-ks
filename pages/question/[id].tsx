import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { getQuestion } from '../../src/getQuestion'
import { Question } from '../../src/types'

/**
 * @description
 * Dynamic routing with one query param, client side data fetching
 * https://nextjs.org/docs/routing/dynamic-routes
*/

const Question: NextPage = () => {
    const [question, setQuestion] = useState<Question>();
    const router = useRouter();

    const { id } = router.query;

    useEffect(() => {
        const fetchQuestions = async () => {
            if (typeof id === 'string' && parseInt(id, 10) != NaN) {
                const question = await getQuestion(parseInt(id, 10));

                if (question) {
                    setQuestion(question);
                }
            }
        }
        fetchQuestions();
    }, [id])

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
                {question && (<p>
                    {question.content}
                </p>)}
            </main>
        </div>
    )
}

export default Question
