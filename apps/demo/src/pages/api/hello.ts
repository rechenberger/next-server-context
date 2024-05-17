import { createServerContext } from '@sodefa/next-server-context'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  a()
  b()

  res.status(200).json({ message: 'Hello from Next.js!' })
}

const ctx = createServerContext()

const a = async () => {
  ctx.set(true)
}

const b = async () => {
  console.log(!!ctx.get())
}
