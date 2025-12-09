import React from "react";

export default function Header({ totalStock, totalValue }) {
  return (
    <header className="flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur shadow-md">
      <div>
        <h1 className="text-2xl font-extrabold text-sky-700">Web Restok</h1>
        <p className="text-sm text-sky-600">blue store ✨</p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="text-right">
          <div className="text-xs text-sky-500">Total Stok</div>
          <div className="text-lg font-semibold text-sky-700">{totalStock}</div>
        </div>

        <div className="text-right">
          <div className="text-xs text-sky-500">Nilai</div>
          <div className="text-lg font-semibold text-sky-700">
            Rp {Number(totalValue).toLocaleString()}
          </div>
        </div>
      </div>
    </header>
  );
}
