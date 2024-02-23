# Next Server Context

The missing server context for Next.js App Directory.

## Page Context

/app/[myParam]/page.ts

```tsx
import { pageContext } from 'next-server-context'
import { NestedServerComponent } from './NestedServerComponent'

export default pageContext.Wrapper(({ params, searchParams }) => {
  return (
    <>
      <h1>Page with a lot of Params</h1>
      <NestedServerComponent />
    </>
  )
})
```

/app/[myParam]/NestedServerComponent.ts

```tsx
import { pageContext } from 'next-server-context'

export const NestedServerComponent = () => {
  const { params, searchParams } = pageContext.getOrThrow()
  return <div>NestedServerComponent: {params.myParam}</div>
}
```
