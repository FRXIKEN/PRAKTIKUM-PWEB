import React, { useState } from "react";

export default function ItemForm({ onAdd }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !qty || !price) return;

    const newItem = {
      id: Date.now(), // ID unik
      name,
      qty: Number(qty),
      price: Number(price),
    };

    console.log("FORM ADD:", newItem); // debug

    onAdd(newItem);

    // reset form
    setName("");
    setQty("");
    setPrice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur p-5 rounded-2xl shadow-sm space-y-4"
    >
      <h2 className="text-lg font-semibold text-sky-700">Tambah Barang</h2>

      {/* NAMA */}
      <div>
        <label className="text-sm">Nama Barang</label>
        <input
          className="w-full p-2 border rounded-xl mt-1"
          placeholder="Contoh: Teh Botol"
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
          placeholder="Contoh: 12"
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
          placeholder="Contoh: 5000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-xl bg-sky-600 text-white font-semibold mt-2"
      >
        Tambah
      </button>
    </form>
  );
}
