import type { Datum } from '../types'
import { Item } from './Item'

interface Props {
  results: Datum[] | null
}

export function Results({ results }: Props) {
  return (
    <div className='results-container'>
      {results &&
        (results.length > 0 ? (
          results.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <p>No artworks found</p>
        ))}
    </div>
  )
}
