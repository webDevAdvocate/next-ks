import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * @description
 * Api routes
 * https://nextjs.org/docs/api-routes/introduction
*/


type Data = {
  questions: {id: number, content: string}[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    questions: [
      { id: 1, content: "Who discovered America?" },
      { id: 2, content: "Why I haven't received my letter from Hogwart?" },
      { id: 3, "content": "Would woodchuck chuck?" }
    ]
  })
}
