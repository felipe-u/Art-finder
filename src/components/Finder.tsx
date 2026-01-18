import { useState } from 'react'
import { searchArtworksWith } from '../service/artworks'

export function Finder() {
  const [query, setQuery] = useState('')

  const handleQuery = async () => {
    if (!query) return
    const results = await searchArtworksWith(query)
    console.log(results.data)
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
