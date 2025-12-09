import React from "react";

export default function Header({ totalStock, totalValue, totalOut, totalRevenue }) {
  return (
    <header className="flex items-center justify-between p-4 rounded-2xl bg-white/60 backdrop-blur shadow-md">
      <div>
        <h1 className="text-2xl font-extrabold text-sky-700">Web Restok</h1>
        <p className="text-sm text-sky-600">blue store ✨</p>
      </div>

      <div className="flex gap-6 items-center">

        {/* Total Stok */}
        <div className="text-right">
          <div className="text-xs text-sky-500">Total Stok</div>
          <div className="text-lg font-semibold text-sky-700">{totalStock}</div>
        </div>

        {/* Nilai Stok */}
        <div className="text-right">
          <div className="text-xs text-sky-500">Nilai</div>
          <div className="text-lg font-semibold text-sky-700">
            Rp {Number(totalValue).toLocaleString()}
          </div>
        </div>

        {/* Total Stok Keluar */}
        <div className="text-right">
          <div className="text-xs text-sky-500">Stok Keluar</div>
          <div className="text-lg font-semibold text-sky-700">{totalOut}</div>
        </div>

        {/* Pendapatan */}
        <div className="text-right">
          <div className="text-xs text-sky-500">Pendapatan</div>
          <div className="text-lg font-semibold text-sky-700">
            Rp {Number(totalRevenue).toLocaleString()}
          </div>
        </div>

      </div>
    </header>
  );
}
