import { useEffect, useState } from 'react'
import type { Artwork, Datum } from '../types'
import { fetchArtworkData } from '../service/artworks'
import { DEFAULT_IMG_URL } from '../consts'
import { useImg } from '../hooks/useImg'
import '../styles/Item.css'

interface Props {
  item: Datum
  openArtworkBanner: (artwork: Artwork) => void
}

export function Item({ item, openArtworkBanner }: Props) {
  const [artwork, setArtwork] = useState<Artwork | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { artworkImgSrc } = useImg({ artwork })

  useEffect(() => {
    if (!item) return

    const fetchData = async () => {
      try {
        const artworkData = await fetchArtworkData(item.api_link)
        setArtwork(artworkData)
      } catch (error) {
        setError((error as Error).message)
      }
    }
    fetchData()
  }, [item])

  if (error) return <p>{error}</p>

  return (
    <div className='item-container'>
      {artwork && item && (
        <div className='item-desc' onClick={() => openArtworkBanner(artwork)}>
          <img
            src={artworkImgSrc || DEFAULT_IMG_URL}
            alt={item?.thumbnail?.alt_text || 'Nice piece of art'}
          />
          <h3>{artwork?.data.title}</h3>
        </div>
      )}
    </div>
  )
}
