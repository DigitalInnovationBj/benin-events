// pages/dashboard/stats.jsx

import { useState } from "react";

const sampleStats = [
  { id: 1, category: "Concert", total: 12 },
  { id: 2, category: "Conférence", total: 8 },
  { id: 3, category: "Exposition", total: 5 },
  { id: 4, category: "Atelier", total: 7 },
];

export default function StatsPage() {
  const [search, setSearch] = useState("");

  const filteredStats = sampleStats.filter((stat) =>
    stat.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Statistiques</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher une catégorie"
          className="border px-4 py-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Catégorie</th>
              <th className="py-3 px-4 text-left">Nombre d'événements</th>
            </tr>
          </thead>
          <tbody>
            {filteredStats.length > 0 ? (
              filteredStats.map((stat) => (
                <tr key={stat.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{stat.category}</td>
                  <td className="py-3 px-4">{stat.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center py-6 text-gray-500">
                  Aucune statistique trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}