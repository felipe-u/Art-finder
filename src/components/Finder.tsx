import { useState } from 'react'
import { searchArtworksWith } from '../service/artworks'
import type { Datum } from '../types'

interface Props {
  onSetResults: (data: Datum[]) => void
}

export function Finder({ onSetResults }: Props) {
  const [query, setQuery] = useState('')

  const handleQuery = async () => {
    if (!query) return
    const results = await searchArtworksWith(query)
    onSetResults(results.data)
  }

  return (
    <div className='finder-container'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuery}>Search</button>
    </div>
  )
}
