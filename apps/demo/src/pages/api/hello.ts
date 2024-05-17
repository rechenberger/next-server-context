import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('OK')

  res.status(200).json({ message: 'Hello from Next.js!' })
}
