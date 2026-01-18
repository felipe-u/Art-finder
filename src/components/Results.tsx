import type { Datum } from '../types'

interface Props {
  results: Datum[]
}

export function Results({ results }: Props) {
  return (
    <>
      {results.length > 0 &&
        results.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  )
}
