import { z } from 'zod'

export const createPageContext = <T extends z.Schema>(schema: T) => {
  type PageContext = z.infer<T>
  const pageContextStorage = new AsyncLocalStorage<PageContext>()

  const set = (pageContext: PageContext) => {
    const parsed = schema.parse(pageContext)
    pageContextStorage.enterWith(parsed)
  }

  const get = () => {
    const pageContext = pageContextStorage.getStore()
    if (!pageContext) {
      throw new Error(`PageContext not found. Please wrap your Page with somePageContext.Wrapper
      
      Example:
      export const somePageContext = createPageContext(z.object({
        params: z.object({
          singleParam: z.string(),
          deepParams: z.array(z.string()),
        }),
        searchParams: z.object({
          p1: z.string().optional(),
          p2: z.array(z.string()).optional(),
        }),
      }))

      export default somePageContext.Wrapper(() => {
        return <h1>My Page</h1>
      })`)
    }
    const parsed = schema.parse(pageContext)
    return parsed as PageContext
  }

  const Wrapper = (Page: any) => {
    const WrapperPage = (props: any) => {
      set(props)
      return <Page {...props} />
    }
    return WrapperPage
  }

  return {
    set,
    get,
    Wrapper,
  }
}
