# Next Server Context

The missing server context for Next.js App Directory.

## Install

```bash
pnpm add @sodefa/next-server-context
```

## Page Context

/app/[myParam]/page.tsx

```tsx
import { pageContext } from '@sodefa/next-server-context'
import { NestedServerComponent } from './NestedServerComponent'

export default pageContext.Wrapper(({ params, searchParams }) => {
  return (
    <>
      <h1>MyPage</h1>
      <NestedServerComponent />
    </>
  )
})
```

/app/[myParam]/NestedServerComponent.tsx

```tsx
import { pageContext } from '@sodefa/next-server-context'

export const NestedServerComponent = () => {
  const { params, searchParams } = pageContext.getOrThrow()
  return <div>NestedServerComponent: {params.myParam}</div>
}
```

## Custom Context

/myContext.ts

```ts
import { createServerContext } from '@sodefa/next-server-context'

const myContext = createServerContext<{
  myValue: string
}>()
```

/ParentComp.tsx

```tsx
import { myContext } from './myContext'

export const ParentComp = () => {
  myContext.set({ myValue: 'hi there' })
  return <ChildComp />
}
```

/ChildComp.tsx

```tsx
import { myContext } from './myContext'

export const ChildComp = () => {
  const { myValue } = myContext.getOrThrow()
  return <div>ChildComp: {myValue}</div>
}
```

## Zod Context

/app/zod/[singleParam]/[...deepParams]/myContext.ts

```ts
import { createServerContextWithZod } from '@sodefa/next-server-context'
import { z } from 'zod'

export const myContext = createServerContextWithZod(
  z.object({
    params: z.object({
      singleParam: z.string(),
      deepParams: z.array(z.string()),
    }),
    searchParams: z.object({
      p1: z.string().optional(),
      p2: z.array(z.string()).optional(),
    })
    .catchall(z.string()),
  })
)
```

/app/zod/[singleParam]/[...deepParams]/page.tsx

```tsx
import { NestedServerComponent } from './NestedServerComponent'
import { myContext } from './myContext'

export default myContext.Wrapper(() => {
  return (
    <>
      <h1>Page with a lot of Params</h1>
      <NestedServerComponent />
    </>
  )
})
```

/app/zod/[singleParam]/[...deepParams]/NestedServerComponent.tsx

```tsx
import { myContext } from './myContext'

export const NestedServerComponent = () => {
  const { params, searchParams } = myContext.getOrThrow()
  return (
    <pre className="p-2 border rounded flex flex-col gap-4 font-mono text-xs ">
      {JSON.stringify({ params, searchParams }, null, 2)}
    </pre>
  )
}
```
