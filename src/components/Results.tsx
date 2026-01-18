import type { Datum } from '../types'
import { Item } from './Item'

interface Props {
  results: Datum[]
}

export function Results({ results }: Props) {
  return (
    <div className='results-container'>
      {results.length > 0 &&
        results.map((item) => <Item key={item.id} item={item} />)}
    </div>
  )
}
