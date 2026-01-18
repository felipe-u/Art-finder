import { useEffect, useState } from 'react'
import type { Artwork, Datum } from '../types'
import { fetchArtworkData } from '../service/artworks'
import { ARTWORK_IMG_SRC, ARTWORK_IMG_SRC_END } from '../consts'

interface Props {
  item: Datum
}

export function Item({ item }: Props) {
  const [artwork, setArtwork] = useState<Artwork | null>(null)
  const [artworkImgSrc, setArtworkImgSrc] = useState('')
  const [error, setError] = useState<string | null>(null)

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

  useEffect(() => {
    if (!artwork) return

    setArtworkImgSrc(
      `${ARTWORK_IMG_SRC}/${artwork.data.image_id}/${ARTWORK_IMG_SRC_END}`,
    )
  }, [artwork])

  if (error) return <p>{error}</p>

  return (
    <div className='item-container'>
      <img src={artworkImgSrc} alt='Random img' />
      <h3>{artwork?.data.title}</h3>
    </div>
  )
}
