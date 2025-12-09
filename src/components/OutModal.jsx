import React, { useState } from "react";

export default function OutModal({ item, onClose, onSubmit }) {
  const [qty, setQty] = useState(1);
  const [sellPrice, setSellPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const qtyNum = Number(qty);
    const sellNum = Number(sellPrice);

    if (!qtyNum || qtyNum <= 0) {
      setError("Jumlah harus lebih dari 0");
      return;
    }

    if (qtyNum > item.qty) {
      setError("Stok tidak cukup");
      return;
    }

    if (!sellNum || sellNum <= 0) {
      setError("Harga jual harus lebih dari 0");
      return;
    }

    onSubmit({ qty: qtyNum, sellPrice: sellNum });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl space-y-4 w-80 shadow-xl"
      >
        <h2 className="text-lg font-semibold text-sky-700">Barang Keluar</h2>

        <div className="text-sm text-sky-600">
          {item.name} • Stok: {item.qty}
        </div>

        {/* JUMLAH KELUAR */}
        <div>
          <label className="text-sm">Jumlah keluar</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min="1"
            className="w-full p-2 border rounded-xl mt-1"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
              setError("");
            }}
            required
          />
        </div>

        {/* HARGA JUAL */}
        <div>
          <label className="text-sm">Harga jual per item</label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            min="1"
            className="w-full p-2 border rounded-xl mt-1"
            value={sellPrice}
            onChange={(e) => {
              setSellPrice(e.target.value);
              setError("");
            }}
            required
          />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

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
            className="px-3 py-1 rounded-lg bg-orange-500 text-white"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}