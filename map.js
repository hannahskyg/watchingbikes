// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);


// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubmFoc2t5ZyIsImEiOiJjbWkweWZ6dm8wNnVkMmtxNzU4eGRjN3prIn0.vmVNjIGtPTJcx9N-Dikhzw';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-71.0898054, 42.3590096], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});

