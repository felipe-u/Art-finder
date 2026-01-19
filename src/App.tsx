import { useState } from 'react'
import './App.css'
import { Finder } from './components/Finder'
import { Results } from './components/Results'
import type { Datum } from './types'

function App() {
  const [results, setResults] = useState<Datum[] | null>(null)

  const onSetResults = (data: Datum[]) => {
    setResults(data)
  }

  return (
    <div className='app-container'>
      <header>
        <h1>Art Finder</h1>
        <Finder onSetResults={onSetResults} />
      </header>

      <main>
        <Results results={results} />
      </main>
    </div>
  )
}

export default App
