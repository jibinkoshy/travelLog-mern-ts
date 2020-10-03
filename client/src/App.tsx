import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
};

export default App;
