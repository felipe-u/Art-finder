import { useEffect, useState } from 'react'
import type { Artwork } from '../types'
import { ARTWORK_IMG_SRC, ARTWORK_IMG_SRC_END } from '../consts'

export function useImg({ artwork }: { artwork: Artwork | null }) {
  const [artworkImgSrc, setArtworkImgSrc] = useState('')

  useEffect(() => {
    if (!artwork) return

    setArtworkImgSrc(
      `${ARTWORK_IMG_SRC}/${artwork.data.image_id}/${ARTWORK_IMG_SRC_END}`,
    )
  }, [artwork])

  return { artworkImgSrc }
}
