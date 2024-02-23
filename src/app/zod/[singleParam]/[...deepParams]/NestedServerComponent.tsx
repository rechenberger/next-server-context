import { somePageContext } from './page'

export const NestedServerComponentWithZod = () => {
  const { params, searchParams } = somePageContext.get()
  return (
    <>
      <div className="p-2 border rounded flex flex-col gap-4">
        <div>
          NestedServerComponentWithZod using{' '}
          <span className="font-mono">somePageContext.get()</span>
        </div>
        <hr />
        <pre className="font-mono text-xs ">
          {JSON.stringify({ params, searchParams }, null, 2)}
        </pre>
      </div>
    </>
  )
}
