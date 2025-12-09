import React, { useState } from "react";
import EditModal from "./EditModal";

export default function ItemList({ items, onDelete, onUpdate, onOut }) {
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
                Stok: {item.qty} • Modal: Rp {item.price.toLocaleString()}
              </div>
            </div>

            <div className="flex gap-2">
              {/* BUTTON EDIT */}
              <button
                className="px-3 py-1 rounded-lg border"
                onClick={() => setEditing(item)}
              >
                Edit
              </button>

              {/* BUTTON KELUARKAN BARANG */}
              <button
                className="px-3 py-1 rounded-lg bg-orange-50 text-orange-600 border border-orange-200"
                onClick={() => {
                  const outQty = prompt("Jumlah barang keluar:");
                  if (!outQty || isNaN(outQty) || Number(outQty) <= 0) return;

                  if (Number(outQty) > item.qty) {
                    alert("Stok tidak cukup!");
                    return;
                  }

                  const sellPrice = prompt("Harga jual per item:");
                  if (!sellPrice || isNaN(sellPrice) || Number(sellPrice) <= 0)
                    return;

                  // Kurangi stok
                  onUpdate({
                    ...item,
                    qty: item.qty - Number(outQty),
                  });

                  // Simpan riwayat barang keluar
                  onOut({
                    id: Date.now(),
                    itemId: item.id,
                    name: item.name,
                    qty: Number(outQty),
                    price: Number(item.price), // harga modal
                    sellPrice: Number(sellPrice), // harga jual
                  });
                }}
              >
                Keluar
              </button>

              {/* BUTTON HAPUS */}
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
