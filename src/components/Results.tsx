import { useEffect, useState } from 'react'
import type { Artwork, Datum } from '../types'
import { Item } from './Item'
import { FullArtwork } from './FullArtwork'
import '../styles/Results.css'
import '../styles/Banner.css'

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

  useEffect(() => {
    document.body.style.overflow = artwork ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [artwork])

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
          <FullArtwork
            artwork={artwork}
            closeArtworkBanner={closeArtworkBanner}
          />
        </div>
      )}
    </>
  )
}
