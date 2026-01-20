import { render, screen } from '@testing-library/react'
import { Finder } from './Finder'
import userEvent from '@testing-library/user-event'
import { searchArtworksWith } from '../../service/artworks'
import type { Datum } from '../../types'

vi.mock('../../service/artworks', () => ({
  searchArtworksWith: vi.fn(),
}))

describe('Finder component', () => {
  it('does nothing if search button is clicked with empty query', async () => {
    const onSetResults = vi.fn()

    render(<Finder onSetResults={onSetResults} />)

    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.click(button)

    expect(onSetResults).not.toHaveBeenCalled()
    expect(searchArtworksWith).not.toHaveBeenCalled()
  })

  it('should call artworks service and returns data to provide input function', async () => {
    const onSetResults = vi.fn()
    const mockResults: Datum[] = [{ id: 1, title: 'Artwork 1' } as Datum]

    vi.mocked(searchArtworksWith).mockResolvedValueOnce(mockResults)

    render(<Finder onSetResults={onSetResults} />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /search/i })

    await userEvent.type(input, 'Art')
    await userEvent.click(button)

    expect(searchArtworksWith).toHaveBeenCalledWith('Art')
    expect(onSetResults).toHaveBeenCalledWith(mockResults)
  })
})
