import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function CaretakerMapPage() {
    const caretakers = [
        {
          id: 1,
          name: "John Doe",
          location: "Central Davis",
          lat: 38.5449,
          lng: -121.7405,
        },
        {
          id: 2,
          name: "Jane Smith",
          location: "El Macero",
          lat: 38.5294,
          lng: -121.6833,
        },
        {
          id: 3,
          name: "Alex Kim",
          location: "Covell Park",
          lat: 38.5662,
          lng: -121.7616,
        },
      ];
  return (
    <div className="min-h-screen bg-[#f6d5d3] font-sans">
      <header className="bg-[#f4a9a3] p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3">
          <img src="/ChildCareMap.png" alt="BridgeCare Logo" className="h-8" />
          <h1 className="text-white text-xl font-semibold">Find A Caretaker!</h1>
        </div>
        <button className="bg-white text-[#f4a9a3] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Log Out ↷
        </button>
      </header>

      <div className="bg-[#fbeae9] px-6 py-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search Zipcode"
          className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-1/3"
        />
        <button className="bg-[#f4a9a3] text-white px-4 py-2 rounded-lg hover:bg-[#e8948c]">
          Edit Filtering
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {caretakers.map((c) => (
          <div key={c.id} className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
            <div className="text-4xl mb-2">👤</div>
            <h2 className="font-bold">{c.name}</h2>
            <p className="text-sm text-gray-500">{c.location}</p>
            <div className="mt-2 text-xl text-pink-400">♥</div>
          </div>
        ))}
      </div>

      <div className="h-[400px] px-6 pb-12">
        <MapContainer center={[38.5449, -121.7405]} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {caretakers.map((c) => (
            <Marker key={c.id} position={[c.lat, c.lng]}>
              <Popup>
                {c.name} <br /> {c.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}