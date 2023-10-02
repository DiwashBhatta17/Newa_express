import React from 'react';
import MapContainer from './Services/Locations/MapContainer';

function App() {
  // Replace these with the actual latitude and longitude values
  const yourLatitude = 28.785; // Example latitude
  const yourLongitude = 84.4194; // Example longitude

  return (
    <div className="App">
      <MapContainer
        latitude={yourLatitude}
        longitude={yourLongitude}

      />
    </div>
  );
}

export default App;
