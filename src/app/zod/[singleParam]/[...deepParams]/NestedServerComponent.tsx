import { myContext } from './myContext'

export const NestedServerComponentWithZod = () => {
  const { params, searchParams } = myContext.getOrThrow()
  return (
    <>
      <div className="p-2 border rounded flex flex-col gap-4">
        <div>
          NestedServerComponentWithZod using{' '}
          <span className="font-mono">myContext.getOrThrow()</span>
        </div>
        <hr />
        <pre className="font-mono text-xs ">
          {JSON.stringify({ params, searchParams }, null, 2)}
        </pre>
      </div>
    </>
  )
}
