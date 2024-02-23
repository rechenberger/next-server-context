export const createServerContext = <T = unknown, Props extends T = T>() => {
  const pageContextStorage = new AsyncLocalStorage<T>()

  const set = (ctx: T) => {
    pageContextStorage.enterWith(ctx)
  }

  const get = () => {
    const ctx = pageContextStorage.getStore()
    return ctx
  }

  const getOrThrow = () => {
    const ctx = get()
    if (!ctx) {
      throw new Error(`ServerContext not found.`)
    }
    return ctx
  }

  const Wrapper = (Page: (props: Props) => JSX.Element) => {
    const WrapperPage = (props: Props) => {
      set(props)
      return <Page {...(props as any)} /> // TODO: fix as any
    }
    return WrapperPage
  }

  return {
    set,
    get,
    getOrThrow,
    Wrapper,
  }
}
