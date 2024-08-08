import Map from 'react-map-gl'

const MapBox: React.FC = () => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

  return (
    <div className="absolute inset-0">
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  )
}

export default MapBox
