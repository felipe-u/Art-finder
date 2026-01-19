import { stripHTML } from './content'

describe('stripHTML', () => {
  it('should removes HTML tags and keeps text content', () => {
    const html = '<p>Test <strong>title</strong></p>'
    const result = stripHTML(html)

    expect(result).toBe('Test title')
  })

  it('should handle nested HTML', () => {
    const html = '<div><p>Hello</p><span> world</span></div>'
    const result = stripHTML(html)

    expect(result).toBe('Hello world')
  })

  it('should return an empty string when input does not have text content', () => {
    const html = '<p></p>'
    const result = stripHTML(html)

    expect(result).toBeFalsy()
    expect(result).toBe('')
  })
})
