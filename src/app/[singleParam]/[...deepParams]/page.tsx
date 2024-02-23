import { NestedServerComponent } from '@/app/NestedServerComponent'
import { PageContextWrapper } from '@/page-context'

export default PageContextWrapper(() => {
  return (
    <>
      <h1>Page with a lot of Params</h1>
      <NestedServerComponent />
    </>
  )
})
