import { useState } from 'react';
// import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const mockEvents = [
  { id: 1, name: 'Tech Summit', date: '2025-04-20', category: 'Tech', status: 'Actif' },
  { id: 2, name: 'Music Fest', date: '2025-05-15', category: 'Musique', status: 'À venir' },
  { id: 3, name: 'Business Talk', date: '2025-06-10', category: 'Business', status: 'Terminé' },
  { id: 4, name: 'Startup Day', date: '2025-07-01', category: 'Tech', status: 'À venir' },
];

export default function DashboardHome() {
  const [search, setSearch] = useState('');

  const filteredEvents = mockEvents.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative w-72">
          <input
            type="text"
            className="pl-10 pr-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Rechercher un événement"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <FaSearch className="absolute left-3 top-2.5 text-gray-400" /> */}
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Événements totaux</h2>
          <p className="text-2xl font-bold">54</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Tickets vendus</h2>
          <p className="text-2xl font-bold">3,245</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Revenus générés</h2>
          <p className="text-2xl font-bold">€12,450</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Événements à venir</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>

      {/* Tableau des événements récents */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Événements récents</h2>
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2 px-4">Nom</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Catégorie</th>
              <th className="py-2 px-4">Statut</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{event.name}</td>
                <td className="py-2 px-4">{event.date}</td>
                <td className="py-2 px-4">{event.category}</td>
                <td className="py-2 px-4">{event.status}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    {/* <FaEdit /> */}
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    {/* <FaTrash /> */}
                  </button>
                </td>
              </tr>
            ))}
            {filteredEvents.length === 0 && (
              <tr>
                <td className="py-4 px-4 text-center text-gray-500" colSpan={5}>
                  Aucun événement trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bas de page / placeholder pour autre contenu */}
      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; 2025 Event Dashboard. Tous droits réservés.
      </div>
    </div>
  );
}