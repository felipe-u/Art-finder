import type { Artwork } from '../../types'
import { DEFAULT_IMG_URL } from '../../consts'
import { useImg } from '../../hooks/useImg'
import { stripHTML } from '../../util/content'

interface Props {
  artwork: Artwork
  closeArtworkBanner: () => void
}

export function FullArtwork({ artwork, closeArtworkBanner }: Props) {
  const { artworkImgSrc } = useImg({ artwork })

  return (
    <div className='full-artwork-container'>
      <div className='artwork-desc'>
        <h2>{artwork.data.title}</h2>
        <p>
          By {artwork.data.artist_title} - {artwork.data.place_of_origin}{' '}
          {artwork.data.date_display}
        </p>
        <hr />

        <img
          src={artworkImgSrc || DEFAULT_IMG_URL}
          alt={artwork.data.thumbnail.alt_text || 'Nice piece of art'}
        />

        {artwork.data.description && (
          <p className='full-desc'>
            <strong>Description</strong>
            <hr />
            {stripHTML(artwork.data.description ?? '')}
          </p>
        )}
        {artwork.data.style_title && (
          <p>
            <strong>Style: </strong>
            {artwork.data.style_title}
          </p>
        )}
        {artwork.data.medium_display && (
          <p>
            <strong>Technique: </strong>
            {artwork.data.medium_display}
          </p>
        )}
      </div>
      <button className='close-btn' onClick={closeArtworkBanner}>
        Close
      </button>
    </div>
  )
}
