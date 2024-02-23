import { NestedServerComponent } from '@/app/NestedServerComponent'
import { pageContext } from '@/lib/pageContext'

export default pageContext.Wrapper(({ params, searchParams }) => {
  return (
    <>
      <h1>Page with a lot of Params</h1>
      <NestedServerComponent />
    </>
  )
})
