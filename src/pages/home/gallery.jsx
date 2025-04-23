import { useEffect, useState } from "react";
import axios from "axios";

export default function GalleryPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-accent">Gallery</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div key={item._id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <button
                onClick={() => window.location.href = `/product/${item._id}`}
                className="mt-2 px-4 py-2 bg-accent text-white rounded hover:bg-accent/80"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}