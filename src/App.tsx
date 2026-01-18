import './App.css'
import { Finder } from './components/Finder'
import { Results } from './components/Results'

function App() {
  return (
    <div className='app-container'>
      <header>
        <Finder />
      </header>

      <main>
        <Results />
      </main>
    </div>
  )
}

export default App
