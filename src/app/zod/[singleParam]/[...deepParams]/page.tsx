import { createServerContextWithZod } from '@/lib/createServerContextWithZod'
import { z } from 'zod'
import { NestedServerComponentWithZod } from './NestedServerComponent'

export const myContext = createServerContextWithZod(
  z.object({
    params: z.object({
      singleParam: z.string(),
      deepParams: z.array(z.string()),
    }),
    searchParams: z.object({
      p1: z.string().optional(),
      p2: z.array(z.string()).optional(),
    }),
  })
)

export default myContext.Wrapper(() => {
  return (
    <>
      <h1>Page with a lot of Params</h1>
      <NestedServerComponentWithZod />
    </>
  )
})
