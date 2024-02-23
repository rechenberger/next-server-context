import { PageContextWrapper } from '@/page-context'
import { NestedServerComponent } from './NestedServerComponent'

export default PageContextWrapper(() => {
  return (
    <>
      <h1>Index</h1>
      <NestedServerComponent />
    </>
  )
})
