import { shorthenTitle } from './title'

describe('shortenTitle', () => {
  it('should return an unchanged title if lenght is 50 or less', () => {
    const title = 'Short title'
    const result = shorthenTitle(title)

    expect(result).toBe(title)
  })

  it('shold return a short title if lenght is longer than 50 characters', () => {
    const title =
      'This is a very long title that definitely exceed fifty characters'
    const result = shorthenTitle(title)

    expect(result).toBe('This is a very long title that definitely exceed f...')
  })
})
