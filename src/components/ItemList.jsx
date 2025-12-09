import React, { useState } from "react";
import EditModal from "./EditModal";

export default function ItemList({ items, onDelete, onUpdate }) {
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        className="p-2 mb-4 rounded-xl border w-1/2"
        placeholder="Cari..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-white/60 rounded-2xl flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-sky-700">{item.name}</div>
              <div className="text-sm text-sky-500">
                Stok: {item.qty} • Rp {item.price.toLocaleString()}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                className="px-3 py-1 rounded-lg border"
                onClick={() => setEditing(item)}
              >
                Edit
              </button>

              <button
                className="px-3 py-1 rounded-lg bg-red-50 text-red-600 border border-red-200"
                onClick={() => onDelete(item.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <EditModal
          item={editing}
          onClose={() => setEditing(null)}
          onSave={onUpdate}
        />
      )}
    </div>
  );
}
