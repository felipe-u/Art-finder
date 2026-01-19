import { useState } from 'react'
import type { Artwork, Datum } from '../types'
import { Item } from './Item'
import { FullArtwork } from './FullArtwork'
import '../styles/Results.css'

interface Props {
  results: Datum[] | null
}

export function Results({ results }: Props) {
  const [artwork, setArtwork] = useState<Artwork | null>(null)

  const openArtworkBanner = (artwork: Artwork) => {
    setArtwork(artwork)
  }

  const closeArtworkBanner = () => {
    setArtwork(null)
  }

  return (
    <>
      <div className='results-container'>
        {results &&
          (results.length > 0 ? (
            results.map((item) => (
              <Item
                key={item.id}
                item={item}
                openArtworkBanner={openArtworkBanner}
              />
            ))
          ) : (
            <p>No artworks found</p>
          ))}
      </div>

      {artwork && (
        <div className='outer-banner'>
          <div className='inner-banner'>
            <FullArtwork
              artwork={artwork}
              closeArtworkBanner={closeArtworkBanner}
            />
          </div>
        </div>
      )}
    </>
  )
}
