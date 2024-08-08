import MapBox from './components/MapBox'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <div className="w-96 relative z-20">
        <Menu />
      </div>
      <div>
        <MapBox />
      </div>
    </>
  )
}

export default App
