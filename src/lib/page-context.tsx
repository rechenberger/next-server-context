export type PageContext = {
  params: Record<string, string | string[]>
  searchParams: Record<string, string | string[]>
}

const pageContextStorage = new AsyncLocalStorage<PageContext>()

export const setPageContext = (pageContext: PageContext) => {
  pageContextStorage.enterWith(pageContext)
}

export const getPageContext = () => {
  return pageContextStorage.getStore()
}

export const getPageContextOrThrow = () => {
  const pageContext = getPageContext()
  if (!pageContext) {
    throw new Error(`PageContext not found. Please wrap your Page with PageContextWrapper.
    
Example:
export default PageContextWrapper(() => {
  return <h1>My Page</h1>
})`)
  }
  return pageContext
}

export const PageContextWrapper = (Page: any) => {
  const WrapperPage = (props: any) => {
    setPageContext(props)
    return <Page {...props} />
  }
  return WrapperPage
}
