import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { listLogEntries } from './API';

const App: React.FC = () => {
  const [logEntries, setLogEntries] = useState<logEntries[]>([]);
  const [viewport, setViewport] = useState({
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });
  useEffect(() => {
    (async () => {
      const logEntries: logEntries[] = await listLogEntries();
      setLogEntries(logEntries);
      console.log('logEntries::', logEntries);
    })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/jibinkoshy/ckft5lho4253t19qu5u7vreee"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {logEntries.map((entry) => (
        <Marker
          key={entry._id}
          latitude={entry.latitude}
          longitude={entry.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <svg
            className="marker"
            viewBox="0 0 24 24"
            style={{
              width: '24px',
              height: '24px',
            }}
            width="56"
            height="56"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default App;
