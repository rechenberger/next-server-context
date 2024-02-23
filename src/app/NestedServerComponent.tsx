import { getPageContextOrThrow } from '@/page-context'

export const NestedServerComponent = () => {
  const { params, searchParams } = getPageContextOrThrow()
  return (
    <>
      <div className="p-2 border rounded flex flex-col gap-4">
        <div>
          Nested Server Component using{' '}
          <span className="font-mono">getPageContextOrThrow()</span>
        </div>
        <hr />
        <pre className="font-mono text-xs ">
          {JSON.stringify({ params, searchParams }, null, 2)}
        </pre>
      </div>
    </>
  )
}
