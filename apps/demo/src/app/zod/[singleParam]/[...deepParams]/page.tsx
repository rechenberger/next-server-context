import { NestedServerComponentWithZod } from './NestedServerComponent'
import { myContext } from './myContext'

export default myContext.Wrapper(() => {
  return (
    <>
      <h1>Page with a lot of Params</h1>
      <NestedServerComponentWithZod />
    </>
  )
})
