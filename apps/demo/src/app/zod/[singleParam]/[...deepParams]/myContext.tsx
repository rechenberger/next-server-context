import { createServerContextWithZod } from '@sodefa/next-server-context'
import { z } from 'zod'

export const myContext = createServerContextWithZod(
  z.object({
    params: z.object({
      singleParam: z.string(),
      deepParams: z.array(z.string()),
    }),
    searchParams: z
      .object({
        p1: z.string().optional(),
        p2: z.array(z.string()).optional(),
      })
      .catchall(z.union([z.string(), z.array(z.string())])), // Allow additional search params (optional)
  })
)
