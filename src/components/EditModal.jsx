import React, { useState } from "react";

export default function EditModal({ item, onClose, onSave }) {
  const [name, setName] = useState(item.name);
  const [qty, setQty] = useState(item.qty);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...item,
      name,
      qty: Number(qty),
      price: Number(price),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl space-y-4 w-80 shadow-xl"
      >
        <h2 className="text-lg font-semibold text-sky-700">Edit Barang</h2>

        {/* NAMA */}
        <div>
          <label className="text-sm">Nama Barang</label>
          <input
            className="w-full p-2 border rounded-xl mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* STOK */}
        <div>
          <label className="text-sm">Stok</label>
          <input
            type="number"
            className="w-full p-2 border rounded-xl mt-1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            required
          />
        </div>

        {/* HARGA */}
        <div>
          <label className="text-sm">Harga (Rp)</label>
          <input
            type="number"
            className="w-full p-2 border rounded-xl mt-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            className="px-3 py-1 rounded-lg border"
            onClick={onClose}
          >
            Batal
          </button>

          <button
            type="submit"
            className="px-3 py-1 rounded-lg bg-sky-600 text-white"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
