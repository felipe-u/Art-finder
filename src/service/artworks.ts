import { API_URL } from '../consts'
import type { ResultsData } from '../types'

export const searchArtworksWith = async (
  query: string,
): Promise<ResultsData> => {
  try {
    const res = await fetch(`${API_URL}/search?q=${query}`)
    if (!res.ok) throw new Error(`Error: HTTP Status: ${res.status}`)

    const data = await res.json()
    return data
  } catch (error) {
    throw new Error(`Error fetching data from API: ${(error as Error).message}`)
  }
}
