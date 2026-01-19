import type { Artwork } from '../types'

interface Props {
  artwork: Artwork
  closeArtworkBanner: () => void
}

export function FullArtwork({ artwork, closeArtworkBanner }: Props) {
  return (
    <div className='full-artwork-container'>
      <h2>{artwork.data.title}</h2>

      <button onClick={closeArtworkBanner}>Close</button>
    </div>
  )
}
