import { useState } from 'react'
import type { Datum } from './types'
import { Finder } from './components/Finder/Finder'
import { Results } from './components/Results/Results'
import './App.css' 

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
