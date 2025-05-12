// pages/dashboard/add-event.jsx

import { useState } from "react";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    location: "",
    bannerImage: "",
    entryFree: false,
    images: "",
    organizer: "",
    category: "",
    ticketPrice: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Event:", formData);
    // Envoie ici la requête vers le backend quand il sera prêt
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter un événement</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="title" placeholder="Titre de l'événement" value={formData.title} onChange={handleChange} className="input" required />

        <input type="text" name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} className="input" required />

        <input type="text" name="location" placeholder="Lieu" value={formData.location} onChange={handleChange} className="input" required />

        <input type="text" name="organizer" placeholder="Organisateur" value={formData.organizer} onChange={handleChange} className="input" />

        <input type="text" name="category" placeholder="Catégorie" value={formData.category} onChange={handleChange} className="input" />

        <input type="number" name="ticketPrice" placeholder="Prix du ticket (en FCFA)" value={formData.ticketPrice} onChange={handleChange} className="input" />

        <input type="date" name="startDate" placeholder="Date de début" value={formData.startDate} onChange={handleChange} className="input" />

        <input type="date" name="endDate" placeholder="Date de fin" value={formData.endDate} onChange={handleChange} className="input" />

        <input type="time" name="startTime" placeholder="Heure de début" value={formData.startTime} onChange={handleChange} className="input" />

        <input type="url" name="bannerImage" placeholder="Image de bannière (URL)" value={formData.bannerImage} onChange={handleChange} className="input" />

        <input type="url" name="images" placeholder="Images supplémentaires (URL)" value={formData.images} onChange={handleChange} className="input" />

        <textarea name="description" rows="4" placeholder="Description" value={formData.description} onChange={handleChange} className="input md:col-span-2" />

        <div className="flex items-center gap-3">
          <input type="checkbox" name="entryFree" checked={formData.entryFree} onChange={handleChange} />
          <label htmlFor="entryFree">Entrée gratuite</label>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
          <label htmlFor="featured">Événement vedette</label>
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition md:col-span-2">
          Ajouter l'événement
        </button>
      </form>
    </div>
  );
}