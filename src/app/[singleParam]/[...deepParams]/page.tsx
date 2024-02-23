import { PageContextWrapper, getPageContextOrThrow } from '@/page-context'

export default PageContextWrapper(() => {
  const { params, searchParams } = getPageContextOrThrow()
  return (
    <>
      <h1>SuperPage</h1>
      <pre className="font-mono text-xs p-2 border rounded">
        {JSON.stringify({ params, searchParams }, null, 2)}
      </pre>
    </>
  )
})
