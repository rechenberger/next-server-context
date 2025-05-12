import { createServerContext } from '@sodefa/next-server-context'

const ctx = createServerContext()

export const GET = () => {
  a()
  b()

  return new Response('OK')
}

const a = async () => {
  ctx.set(true)
}

const b = async () => {
  console.log(!!ctx.get())
}
