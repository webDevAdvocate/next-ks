import { Question } from "./types";

export const getQuestion = async (id: number): Promise<Question | null> => {
    const questions = await getQuestions()

    if (!Array.isArray(questions)) {
        return null;
    }

    const question = questions.filter((q: { id: number }) => q.id == id);

    return question[0] || null;
}

export const getQuestions = async () => {
    const {questions} = await (await fetch('http://localhost:3000/api/questions')).json();

    if (!Array.isArray(questions)) {
        return [];
    }

    return questions;
}