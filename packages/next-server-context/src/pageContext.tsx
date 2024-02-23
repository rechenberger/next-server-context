import { createServerContext } from './createServerContext'

export const pageContext = createServerContext<{
  params: Record<string, string | string[]>
  searchParams: Record<string, string | string[]>
}>()
