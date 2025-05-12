// pages/dashboard/events.jsx

import { useState } from "react";

const sampleEvents = [
  {
    id: 1,
    title: "Festival de Musique",
    date: "2025-05-01",
    location: "Cotonou",
    category: "Concert",
  },
  {
    id: 2,
    title: "Tech Conf Bénin",
    date: "2025-06-15",
    location: "Porto-Novo",
    category: "Conférence",
  },
  {
    id: 3,
    title: "Salon de l'Art",
    date: "2025-07-20",
    location: "Parakou",
    category: "Exposition",
  },
];

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState(sampleEvents);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Événements</h2>
        <input
          type="text"
          placeholder="Rechercher un événement"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Titre</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Lieu</th>
              <th className="py-3 px-4 text-left">Catégorie</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <tr key={event.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{event.title}</td>
                  <td className="py-3 px-4">{event.date}</td>
                  <td className="py-3 px-4">{event.location}</td>
                  <td className="py-3 px-4">{event.category}</td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                      Éditer
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  Aucun événement trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}