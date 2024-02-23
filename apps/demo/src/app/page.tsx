import { pageContext } from '@sodefa/next-server-context'
import { NestedServerComponent } from './NestedServerComponent'

export default pageContext.Wrapper(() => {
  return (
    <>
      <h1>Index</h1>
      <NestedServerComponent />
    </>
  )
})
