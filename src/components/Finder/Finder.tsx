import { useState } from 'react'
import type { Datum } from '../../types'
import { searchArtworksWith } from '../../service/artworks'
import './Finder.css'

interface Props {
  onSetResults: (data: Datum[]) => void
}

export function Finder({ onSetResults }: Props) {
  const [query, setQuery] = useState('')

  const handleQuery = async () => {
    if (!query) return
    const results = await searchArtworksWith(query)
    onSetResults(results)
  }

  return (
    <div className='finder-container'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuery} className='finder-btn'>
        Search
      </button>
    </div>
  )
}
