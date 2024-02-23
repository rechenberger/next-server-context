import { pageContext } from '@/lib/pageContext'
import { NestedServerComponent } from './NestedServerComponent'

export default pageContext.Wrapper(() => {
  return (
    <>
      <h1>Index</h1>
      <NestedServerComponent />
    </>
  )
})
