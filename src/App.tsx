import LeafletMap from './components/LeafletMap'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <div className="relative z-10">
        <Menu />
      </div>
      <div>
        <LeafletMap />
      </div>
    </>
  )
}

export default App
