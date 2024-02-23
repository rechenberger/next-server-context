import { type z } from 'zod'
import { createServerContext } from './createServerContext'

export const createServerContextWithZod = <
  T extends z.Schema,
  ComponentProps extends z.infer<T>
>(
  schema: T
) => {
  type TypedContext = z.infer<T>
  const store = createServerContext<TypedContext>()

  const set = (ctx: TypedContext) => {
    const parsed = schema.parse(ctx)
    return store.set(parsed)
  }

  const get = () => {
    const ctx = store.get()
    if (!ctx) return ctx
    const parsed = schema.parse(ctx)
    return parsed as TypedContext
  }

  const getOrThrow = () => {
    const ctx = store.getOrThrow()
    const parsed = schema.parse(ctx)
    return parsed as TypedContext
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
