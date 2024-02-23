import { AsyncLocalStorage } from 'async_hooks'

export const createServerContext = <
  T = unknown,
  ComponentProps extends T = T
>() => {
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

  const Wrapper = (Component: (props: ComponentProps) => JSX.Element) => {
    const WrapperPage = (props: ComponentProps) => {
      set(props)
      return <Component {...(props as any)} /> // TODO: fix as any
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
